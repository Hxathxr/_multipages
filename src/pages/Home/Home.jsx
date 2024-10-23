import './Home.css';


function Home() {
    return (
        <div className='home-container'>
            <div className='home-left'>
            <div className='ji-img'>
            <img
          src='https://studentscms.spu.ac.th/stdempimg.cfm?empstdtype=STD&vdata=08D4CFEBD581F8A50528CED2D70ECCD082E71807D0FED6DF'
          alt=''
          
        />
           </div>
            <br />
            <h3>Jirapat Ruenghirun</h3>
            <br />
            <h3>66048864 CSI205</h3>


            </div>
            <div className='home-right'>
                <h3 className='abtme'>About me</h3>
                <h4>ปัจจุบันศึกษาอยู่ที่มหาวิทยาลัยศรีปทุม คณะเทคโนโลยีสารสนเทศ สาขาวิทยาการคอมพิวเตอร์ มีความสนใจด้านเทคโนโลยีเเละนวัตกรรมใหม่ๆ เเละหวังว่าจะได้เรียนรู้สิ่งใหม่ๆในอนาคต</h4>
                <br />
                <h3 className='mcontact'>My contact</h3>
                <h4>email : jirapat.rue@spumail.net</h4>

            </div>
        </div>
    )
}

export default Home;
