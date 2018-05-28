pragma solidity ^0.4.23;

contract CampaingGenerator{
    address[] public deployedCampaigns;
    function createCampaing(uint minValue) public{
        deployedCampaigns.push(new Campaign(minValue, msg.sender));
    }
    function getDeployedCampaigns() public view returns (address[]){
        return deployedCampaigns;
        
        
    }
}



contract Campaign{
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals ;
   
        
    }
    
    Request[] public requestes; 
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
   
    modifier restricted{
        require(msg.sender == manager);
        _;
    }
    
    constructor(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
        approversCount = 0;
    }
    
    function contribute() external payable{
        require( msg.value > minimumContribution);
        approvers[msg.sender] = true ;
        approversCount++;
    }
    
    function createRequest(string newDescription,uint newValue, address newRecipient ) public restricted{
        Request memory newRequest = Request({
            description: newDescription,
            value: newValue,
            recipient: newRecipient,
            complete: false,
            approvalCount: 0
        });
        requestes.push(newRequest);
        //requestes.push(Request(newDescription,newValue,newRecipient,false));
    }
    
    function approveRequest(uint index) public {
        Request storage request = requestes[index];
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        request.approvals[msg.sender] = true;
        request.approvalCount++;
        /*
        require(approvers[msg.sender]);
        require(!requestes[index].approvals[msg.sender]);
        requestes[index].approvals[msg.sender] = true;
        requestes[index].approvalCount++;
        */
    }
        
    function finalizeRequest(uint index) public restricted{
        Request storage request = requestes[index];
        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);
        request.recipient.transfer(request.value);
        request.complete = true;
        
    }
    function getDetails() public view returns(uint ,uint , uint , uint , address ){
        return (
                minimumContribution,
                address(this).balance,
                requestes.length,
                approversCount,
                manager
                
            );
    }
    
    function getRequestCount() public view returns(uint){
        return requestes.length;
    }
}