pragma solidity ^0.4.23;



contract bettingGenerator{
    address[] public deployedSportEvent;
    address _teamAccount = 0x2B3EfdF2be8D60901a4c2df0956442B61C603C3B; //verificar que esto sea seguro en versiones posteriors
    function createSportEvent(string _nameEvent,uint8 _feePercentage) public {
        require(msg.sender == _teamAccount);
        deployedSportEvent.push(new sportEvent(_nameEvent,_feePercentage,_teamAccount));       
    }

    function getDeployedEvents() public view returns (address[]){
        return deployedSportEvent;
    }
    
}

contract sportEvent{
    bool eventEnded = false;
    address public manager ;
    uint8 public devPercentage;
    string public name;
    mapping(address => uint) public index;

    struct Player{
        
        uint[12] betsValue;
        address playerAddress;
        
    }
    Player[] private Bettors;
    constructor(string nameEvent,uint8 feePercentage,address teamAccount) public{
        manager = teamAccount;
        name = nameEvent;
        devPercentage = feePercentage;
        Bettors.push(
            Player(
                [uint256 (0),0,0,0,0,0,0,0,0,0,0,0],
                address(this)
        ));

    }
    function enterEvent(uint[12] playerValue) external payable{
        require(
            msg.value == (playerValue[0] + playerValue[1]+playerValue[2]+playerValue[3]+playerValue[4]+playerValue[5]+playerValue[6]+playerValue[7]+playerValue[8]+playerValue[9]+playerValue[10]+playerValue[11])
        );
        
        for(uint a = 0;a<12;a++){
            Bettors[0].betsValue[a] += playerValue[a];    
        }
        
        
        if(index[msg.sender] == 0){ 
            Bettors.push(Player(playerValue,msg.sender));
            index[msg.sender] = Bettors.length-1;
        }
        else{ 
            Player storage bettor = Bettors[index[msg.sender]];
            for(uint b = 0;b<12;b++){
                bettor.betsValue[b] += playerValue[b];    
            }

        }
   
    }


    function splitWinnings(uint winnerIndex) public {
        require(!eventEnded && msg.sender == manager);
        uint devFee = devPercentage*address(this).balance/100;
        manager.transfer(devFee);
        uint newBalance = address(this).balance;
        for(uint l = 1; l<Bettors.length ;l++){
            if(Bettors[l].betsValue[winnerIndex]>0){
                uint share = Bettors[l].betsValue[winnerIndex]*newBalance/Bettors[0].betsValue[winnerIndex];
                (Bettors[l].playerAddress).transfer(share);
            }
        }
        eventEnded = true;

    }
    
    function getDetails() public view returns(string ,uint){
        return (
                name,
                address(this).balance
            );
    }
}
