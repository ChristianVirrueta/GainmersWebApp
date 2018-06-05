pragma solidity ^0.4.23;



contract bettingGenerator{
    address[] public deployedSportEvent;
    address _teamAccount = 0x2B3EfdF2be8D60901a4c2df0956442B61C603C3B; //verificar que esto sea seguro en versiones posteriors
    function createSportEvent(string _nameEvent,uint _feePercentage) public {
        deployedSportEvent.push(new sportEvent(_nameEvent,_feePercentage,_teamAccount));
        
    }
    
    function getDeployedEvents() public view returns (address[]){
        return deployedSportEvent;
    }
    
}

contract sportEvent{
    bool eventEnded = false;
    address public manager ;
    uint public devPercentage;
    string public name;
    mapping(address => uint) public index;

    struct Player{
        
        uint[12] betsValue;
        address playerAddress;
        
    }
    Player[] public Bettors;
    constructor(string nameEvent,uint feePercentage,address teamAccount) public{
        manager = teamAccount;
        name = nameEvent;
        devPercentage = feePercentage;
        Bettors.push(
        Player(
            [uint256 (0),0,0,0,0,0,0,0,0,0,0,0],
            address(this)
        ));

    }
    function enterEvent(uint[12] playerValue) external payable{//CORREGIR PROBLEMA  DE INCONGRUENCIA CON LA PAUESTA
        require(msg.value == getTotalOfArray(playerValue));
        
        for(uint a = 0; a < 12; a++){
            Bettors[0].betsValue[a] += playerValue[a];    
        }
        
        
        if(index[msg.sender] == 0){ 
            Bettors.push(Player(playerValue,msg.sender));
            index[msg.sender] = Bettors.length-1;
        }
        else{ 
            Player storage bettor = Bettors[index[msg.sender]];
            for(uint b = 0; b < 12; b++){
                bettor.betsValue[b] += playerValue[b];    
            }
            /*
            Bettors[index[msg.sender]].betsValue=playerValue;
            Bettors[index[msg.sender]].betsVerification=playerBool;
            */
        }
   
    }
    function getTotalOfArray(uint256[12] contractEth) pure public returns(uint){
        return(
            contractEth[0]+contractEth[1]+contractEth[2]+ 
            contractEth[3]+contractEth[4]+contractEth[5]+
            contractEth[6]+contractEth[7]+contractEth[8]+
            contractEth[9]+contractEth[10]+contractEth[11]
            );
    }
    function getWinners(uint _winnerIndex, uint _totalPool)  public {
        
        for(uint l = 1 ; l < Bettors.length ; l++){
            if(Bettors[l].betsValue[_winnerIndex]>0){
                address winneraddress = (Bettors[l].playerAddress);
                winneraddress.transfer(Bettors[l].betsValue[_winnerIndex]*_totalPool/Bettors[0].betsValue[_winnerIndex]);
            }
        }
    }
    function splitWinnings(uint winnerIndex) public {
        //require(!eventEnded && msg.sender==manager);
        uint devFee = devPercentage*getTotalOfArray(Bettors[0].betsValue)/100;
        uint newTotalPool = getTotalOfArray(Bettors[0].betsValue)-devFee;
        manager.transfer(devFee);
        getWinners(winnerIndex,newTotalPool);
        //Bettors[0].betsValue=[uint256 (0),0,0,0,0,0,0,0,0,0,0,0];
        //eventEnded=true;
    }
    function getDetails() public view returns(string ,uint){
        return (
                name,
                address(this).balance
            );
    }
}
