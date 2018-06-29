import Layout from '../client/layouts/layoutMain'
import Router from 'next/router'
import Auth from '../client/session/authSession'

class MainIndex extends Auth{
    componentDidMount(){
        this.sessionValidate(Router)
    }
    render() {
        return(
            <Layout {...this.props} style={'default'} navbar={true} footer={false} session={this.state}>
                <h1 style={{width:'100%',textAlign:'center'}}>Welcome to Gainmers</h1>
                <p className= 'Identificador-red' style={{color:'#43eee4',textAlign:'center'}} >{this.state.netName}</p>
            </Layout>
        );
    }
}
export default MainIndex;