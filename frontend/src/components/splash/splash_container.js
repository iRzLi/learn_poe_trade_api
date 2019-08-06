import { connect } from 'react-redux';
import Splash from './splash';
import * as ItemActions from '../../actions/item_actions';
import * as StatActions from '../../actions/stat_actions';
import * as StaticDropActions from '../../actions/static_drop_actions';



const mdp = dispatch => {
    return {
        getItems: () => dispatch(ItemActions.requestItems()),
        getStats: () => dispatch(StatActions.requestStats()),
        getStaticDrops: () => dispatch(StaticDropActions.requestStaticDrops()),
    };
};



export default connect(null, mdp)(Splash);