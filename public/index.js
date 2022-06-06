async function main() {
    let twelveData = await fetch ("https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1min&apikey=750af01ad9c746719fc195962e721e81")
    let getJSON = await twelveData.json()
    console.log(getJSON);
    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

}

main()

//  async function getJSON(){
   // let res = await fetch('https://hackerusa-ce.github.io/example-site/json')
    //let txt = await res.json()
   // console.log(txt)
//}
