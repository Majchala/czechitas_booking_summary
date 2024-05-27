import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/header';
import { Property } from '../components/Property/property';
import { Room } from '../components/Room/room';
import { Detail } from '../components/Detail/detail';
import { Additional } from '../components/Additional/additional';
import { Storno } from '../components/Storno/storno';
import { Img } from '../components/Img/img';


document.querySelector('#root').innerHTML = render(
  <div className="summary">
    <div className="summary_head">
      <Header title="Booking Summary"/>
      <Img />
      <Property />
      <Room name="Pokoj 2" type="Dvoulůžkový s dětskou přistýlkou" price="1 800 Kč / noc"/>
    </div>
        <Detail number="Číslo: 459787-745" dates="Pobyt: 13.6.2023 - 17.6.2026" guests="Hosté: 2 dospělí, 1 dítě" 
        services="Stravovávní: žádné" total="7 200 Kč" check_in="Check-in: 13.6.2023 do 18:00" 
        check_out="Check-out: 17.6.2026 do 10:00"/>
        <Additional parking="Parkování: 200 Kč" food="Snídaně: 150 Kč / noc" wellnes="Wellness: Zdarma" wifi=" Wifi: Zdarma na všech pokojích"/>
        <Storno />
  </div>
)