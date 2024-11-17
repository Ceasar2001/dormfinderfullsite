import { MapContainer, TileLayer } from 'react-leaflet'
import './map.scss'
import "leaflet/dist/leaflet.css";
import Pin from '../pin/Pin';



const Map = ({items}) => {
  return (
    <MapContainer
      center = {
        items.length === 1
          ? [items[0].latitude, items[0].longitude]
          : [8.938238425840696, 125.53416172246052]
        }
          zoom={7}
          scrollWheelZoom={false}
          className='map'
        >
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map(item=>(
            <Pin item={item} key={item.id}/>
        ))}
    </MapContainer>
  )
}
//test

export default Map

//butuan coordinate
//8.938238425840696, 125.53416172246052
//map source = https://react-leaflet.js.org/un