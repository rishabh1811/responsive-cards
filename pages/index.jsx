import Head from 'next/head'
import Image from 'next/image'

export default function Home() {

  function products() {

    var allProducts = []

    for (let i = 0; i < 8; i++) {
     
       allProducts.push(<div className="border-2 h-72 rounded-md overflow-hidden">
         <div className="overflow-hidden max-h-[72%]"> 
           <Image src="/1025.jpg" layout="responsive" objectFit="contain" width={400} height={400} /> 
           </div>
         <div><p>Lorem ipsum dolor sit amet consectetur adipitae placeat dolore?</p></div>
       </div>) 
      
    }
    
    return allProducts
  }


  return (<>
    <div className="grid gridContainer gap-4 px-6">

    {products()}
    <div className="border-2 h-72 rounded-md overflow-hidden">
         <div className="overflow-hidden max-h-[72%]"> 
           <Image src="https://www.picsum.photos/id/1064/1000/1000" layout="responsive" objectFit="contain" width={400} height={400} /> 
           </div>
         <div><p>Lorem ipsum dolor sit amet consectetur adipitae placeat dolore?</p></div>
       </div>
    </div>
 
 {/* Styles */}
 <style jsx>{`
 .gridContainer{

   grid-template-columns: repeat(auto-fit , minmax(280px,390px));
   place-content: center;
 }
   
`} </style>
 {/* Styles End */}
 
 
 
 
 </> )
}
