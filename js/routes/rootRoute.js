/**
 * Created by Soon on 2/22/16.
 */
const rootRoute = [{
  path: '/',
  component: require('../components/App').default,
  childRoutes: [
    require('./cartRoute').default,
    require('./productListRoute').default,
  ],
}];

export default rootRoute;

const css = 'opacity:0;font-size:24px;color:#fff;text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);';
console.log('%cSGFpbCBSZWFjdCAmIFJlbGF5ISBzb29uQGxpdmUuY24=', css);