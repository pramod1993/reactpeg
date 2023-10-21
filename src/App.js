import "tw-elements-react/dist/css/tw-elements-react.min.css";
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';
// https://www.theknowledgeacademy.com/in/offers/full-stack-web-developement-certification-training-courses/?utm_term=&utm_campaign=%5BFull+Stack%5D+%5BIN%5D&utm_source=adwords&utm_medium=ppc&hsa_acc=9232302252&hsa_cam=18779456395&hsa_grp=143928141078&hsa_ad=632249195924&hsa_src=&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjw0IGnBhDUARIsAMwFDLmt-5fUX0Wz0UfhethxfHv_VLjasyYU5haPKTUeuFgSIavnDIuTdFkaAjlpEALw_wcB#courses
function App() {
  return (
    <div className="App">
       <MenuBar/>
       <Footer/>
    </div>
  );
}

export default App;
