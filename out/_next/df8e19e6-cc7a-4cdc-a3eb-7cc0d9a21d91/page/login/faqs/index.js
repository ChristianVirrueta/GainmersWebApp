
          window.__NEXT_REGISTER_PAGE('/login/faqs', function() {
            var comp = module.exports=webpackJsonp([7],{41:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(0),n=function(e){return e&&e.__esModule?e:{default:e}}(a),r=l(11),u=l(30);t.default=function(){return n.default.createElement(r.Menu,{style:{marginTop:"30px",marginBottom:"60px"},secondary:!0},n.default.createElement(u.Link,{route:"/"},n.default.createElement("a",{className:"item"},n.default.createElement(r.Image,{src:"http://dapp.gainmers.io/assets/images/logo.png",size:"small"}))),n.default.createElement(r.Menu.Menu,{position:"right"},n.default.createElement("span",{className:"item"},"Share : "),n.default.createElement("ul",{className:"redes-top item"},n.default.createElement("li",null,n.default.createElement("a",{href:"#",className:"facebook"},"facebook")),n.default.createElement("li",null,n.default.createElement("a",{href:"#",className:"messenger"},"messenger")),n.default.createElement("li",null,n.default.createElement("a",{href:"#",className:"twitter"},"twitter")),n.default.createElement("li",null,n.default.createElement("a",{href:"#",className:"whatsapp"},"whatsapp"))),n.default.createElement(r.Menu.Item,null,n.default.createElement(r.Dropdown,{item:!0,text:"Language"},n.default.createElement(r.Dropdown.Menu,null,n.default.createElement(r.Dropdown.Item,null,"English")))),n.default.createElement(r.Menu.Item,null,n.default.createElement(u.Link,{route:"/login/faqs"},n.default.createElement("a",null,"FAQs"))),n.default.createElement(r.Menu.Item,null,n.default.createElement(u.Link,{href:"https://medium.com/@gainmers1"},n.default.createElement("a",{target:"_blank"},"Blog")))))}},54:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(0),r=a(n),u=l(11),c=l(59),o=a(c),d=l(41),i=a(d),s=l(91),m=a(s);t.default=function(e){return r.default.createElement(u.Container,{textAlign:"center"},r.default.createElement(o.default,null,r.default.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"}),r.default.createElement("link",{rel:"stylesheet",href:"http://dapp.gainmers.io/assets/style/styles.css"})),r.default.createElement(i.default,null),e.children,r.default.createElement(m.default,null))}},932:function(e,t,l){e.exports=l(933)},933:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(21),r=a(n),u=l(13),c=a(u),o=l(14),d=a(o),i=l(22),s=a(i),m=l(23),f=a(m),E=l(0),h=a(E),p=l(54),y=a(p),g=(l(30),l(11)),k=function(e){function t(){var e,l,a,n;(0,c.default)(this,t);for(var u=arguments.length,o=Array(u),d=0;d<u;d++)o[d]=arguments[d];return l=a=(0,s.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(o))),a.state={activeIndex:2},a.handleClick=function(e,t){var l=t.index,n=a.state.activeIndex,r=n===l?-1:l;a.setState({activeIndex:r})},n=l,(0,s.default)(a,n)}return(0,f.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.state.activeIndex;return h.default.createElement(y.default,null,h.default.createElement("h1",null,"Getting started"),h.default.createElement(g.Header,{color:"teal",as:"h2",content:"",style:{fontSize:"1.7em",fontWeight:"normal",marginTop:"1.5em"}}),h.default.createElement(g.Divider,{hidden:!0}),h.default.createElement(g.Accordion,{fluid:!0,styled:!0},h.default.createElement(g.Accordion.Title,{active:0===e,index:0,onClick:this.handleClick},h.default.createElement(g.Menu,{secondary:!0},h.default.createElement("h3",null,"What do I need to play ?"),h.default.createElement(g.Menu.Menu,{position:"right"},h.default.createElement(g.Icon,{size:"large",name:"add circle"})))),h.default.createElement(g.Accordion.Content,{active:0===e},h.default.createElement("p",null,"Here’s what you need to start playing:"),h.default.createElement("ul",null,h.default.createElement("li",null,h.default.createElement("p",null,"A computer running the desktop version of Chrome or Firefox browsers.")),h.default.createElement("li",null,h.default.createElement("p",null,"Metamask, a digital Ethereum wallet used specifically with web apps.")),h.default.createElement("li",null,h.default.createElement("p",null,"Ether (ETH), the form of digital payment accepted in GAINMERS.")))),h.default.createElement(g.Accordion.Title,{active:1===e,index:1,onClick:this.handleClick},h.default.createElement(g.Menu,{secondary:!0},h.default.createElement("h3",null,"Installing Metamask"),h.default.createElement(g.Menu.Menu,{position:"right"},h.default.createElement(g.Icon,{size:"large",name:"add circle"})))),h.default.createElement(g.Accordion.Content,{active:1===e},h.default.createElement("p",null,"To play at GAINMERS, you need a way to link your Ethereum wallet with the web. For that purpose you need to install Metamask addon on your Chrome or Firefox browsers. Your Metamask wallet will work as your login in this platform. Then you need to add some ether in your wallet to start playing."),h.default.createElement(g.Embed,{style:{marginBottom:10},icon:"",id:"6Gf_kRE4MJU",placeholder:"https://farm1.staticflickr.com/830/28305627398_ae4c376da8_z.jpg",source:"youtube"})),h.default.createElement(g.Accordion.Title,{active:2===e,index:2,onClick:this.handleClick},h.default.createElement(g.Menu,{secondary:!0},h.default.createElement("h3",null,"Why is Metamask Locked ?"),h.default.createElement(g.Menu.Menu,{position:"right"},h.default.createElement(g.Icon,{size:"large",name:"add circle"})))),h.default.createElement(g.Accordion.Content,{active:2===e},h.default.createElement("p",null,"Each time you start your browser, your Metamask wallet will be locked. To unlock it just type your Metamask password. A piece of cake!")),h.default.createElement(g.Accordion.Title,{active:3===e,index:3,onClick:this.handleClick},h.default.createElement(g.Menu,{secondary:!0},h.default.createElement("h3",null,"How to get Ether?"),h.default.createElement(g.Menu.Menu,{position:"right"},h.default.createElement(g.Icon,{size:"large",name:"add circle"})))),h.default.createElement(g.Accordion.Content,{active:3===e},h.default.createElement("p",null,"You will need to purchase ETH from an exchange and then transfer the ETH from your exchange wallet to your Metamask wallet. Unfortunately, you cannot play at GAINMERS with only an exchange account."),h.default.createElement("p",null,"You cannot use fiat money to play on GAINMERS — currencies need to be converted into ETH first. Also, some exchanges accept credit cards as payment to buy ETH.")),h.default.createElement(g.Accordion.Title,{active:4===e,index:4,onClick:this.handleClick},h.default.createElement(g.Menu,{secondary:!0},h.default.createElement("h3",null,"How to send Ether to metamask?"),h.default.createElement(g.Menu.Menu,{position:"right"},h.default.createElement(g.Icon,{size:"large",name:"add circle"})))),h.default.createElement(g.Accordion.Content,{active:4===e},h.default.createElement("p",null,"Here we detail some steps:"),h.default.createElement("ul",null,h.default.createElement("li",null,h.default.createElement("p",null,"You need to buy ETH from an exchange using normal fiat currency.")),h.default.createElement("li",null,h.default.createElement("p",null,"Copy your Metamask address by clicking on the large ‘...’ next to your account, then select ‘Copy Address to clipboard’.")),h.default.createElement("li",null,h.default.createElement("p",null,"Go to your exchange, click ‘Accounts’, and select your ETH Wallet and click ‘send’.")),h.default.createElement("li",null,h.default.createElement("p",null,"Paste the Metamask address in the box with the amount you’d like to transfer and confirm the transaction."))))))}}]),t}(E.Component);t.default=k}},[932]);
            return { page: comp.default }
          })
        