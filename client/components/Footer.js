import React from 'react';
import { Menu, Icon, Image } from 'semantic-ui-react';
import{ Link } from '../../server/routes';

export default (props)=> {
  return (
    <div>
      <Menu className="padding-top"  style={{marginTop: '40px', marginBottom: '40px', height: '62px', width: '100%', borderTop: '1px solid #000'}}  compact secondary>
        <Menu className="CentraFooter">
          <Menu.Item><Link route="/"><Image src='../../static/images/logo-footer.png'/></Link></Menu.Item>           
          <Menu.Menu >
            <Menu.Item>
              <a className="item" style={{color:'#000000'}}>SHARE: </a>
              <div>
                <ul className="redes">
                <li><a href="https://web.facebook.com/gainmers/" target="_blank" className= "facebook">facebook</a></li>
                <li><a href="#" className= "messenger">messenger</a></li>
                <li><a href="https://twitter.com/GMRplatform/" target="_blank" className= "twitter">twitter</a></li>
                <li><a href="https://web.whatsapp.com://send?text=http://dapp.gainmers.io/" target="_blank" className= "whatsapp" data-action="share/whatsapp/share">whatsapp</a></li>
              </ul>
              </div>
            </Menu.Item>
            <Menu.Item>
              <a className="item" style={{color:'#000000', fontSize:'12px !important', padding:'0 !important', marginRight:'10px'}}>WATCH US:  </a>
              <Link route={'https://www.stateofthedapps.com/dapps/gainmers/'}><a target="_blank"><Image src='../../static/images/state-dapps.png'/></a></Link>
            </Menu.Item>
            <Menu.Item style={{color:'#000000'}}><p className= 'Identificador-red' style={{color:'#43eee4'}} >{props.session.netName}</p></Menu.Item>
          </Menu.Menu>
        </Menu>
      </Menu>
    </div>
  );
}