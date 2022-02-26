import './App.css';
import Header from './Components/Layout/Header/Header';
import Categories from './Components/Layout/Categories/Categories';
import Slider from './Components/Layout/Slider/Slider';
import Campaigns from './Components/Layout/Campaigns/Campaigns';

export const CategoriesData = [
  {id:1, categoryName: 'Yeni Ürünler', url: 'http://cdn.getir.com/cat/5697c78dc181490f00c99fea_57817479-ebe4-4d09-b7fa-2e5a51535f0a.jpeg'},
  {id:2, categoryName: 'İndirimler', url: 'http://cdn.getir.com/cat/5fd8c58f3bdc2389a56e0fb0_2b1a70ca-4a4a-4477-adf1-7414a476aff8.jpeg'},
  {id:3, categoryName: 'Su & İçecek', url: 'http://cdn.getir.com/cat/551430043427d5010a3a5c5e_1619242669958_1619242670038.jpeg'},
  {id:4, categoryName: 'Meyve & Sebze', url: 'http://cdn.getir.com/cat/5928113e616cab00041ec6de_1619242870968_1619242871055.jpeg'},
  {id:5, categoryName: 'Fırından', url: 'http://cdn.getir.com/cat/566eeb85f9facb0f00b1cb16_1619242817768_1619242817849.jpeg'},
  {id:6, categoryName: 'Temel Gıda', url: 'http://cdn.getir.com/cat/56dfcfba86004203000a870d_1619242834654_1619242834734.jpeg'},
  {id:7, categoryName: 'Atıştırmalık', url: 'http://cdn.getir.com/cat/56dfe03cf82055030022cdc0_1619242841966_1619242842053.jpeg'},
  {id:8, categoryName: 'Dondurma', url: 'http://cdn.getir.com/cat/55bca8484dcda90c00e3aa80_1619242741382_1619242741482.jpeg'},

]
function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Categories />
    <Campaigns />
    </div>
  );
}

export default App;
