import Head from 'next/head';
import Navbar from '../components/Navbar';
import SideMenu from '../components/SideMenu';
import Carousel from '../components/Carousel';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
      </Head>

      <Navbar/>
      <div className="container" style={{paddingTop: '50px'}}>
        <div className="row">
          <div className="col-lg-3">
            <SideMenu/>
          </div>
          <div className="col-lg-9">
            <Carousel/>
            <div className="row">
              <Cards/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}