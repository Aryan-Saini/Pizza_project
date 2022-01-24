//gets the iframes
var shopMap = document.getElementsByClassName('shop-location');
//gets the div the iframe is in
var div = document.getElementsByClassName('iframe');
//locations
var locationSelector = [
  //0
  '2795PembinaHwy,Winnipeg',
  //1
  '1765KenastonBlvd,Winnipeg',
  //2
  '140Meadowood,Winnipeg',
  //3
  '1262PembinaHwy,Winnipeg',
  //4
  '1327PortageAve,Winnipeg',
  //5
  '6640RoblinBlvd,Winnipeg',
  //6
  '3166PortageAve,Winnipeg',
  //7
  "300StAnne'sRd,Winnipeg",
  //8
  '723McPhillipsSt,Winnipeg',
  //9
  '130ProvencherBlvd,Winnipeg',
  //11
  '1100ConcordiaAve,Winnipeg',
  //12
  '14-998KeewatinSt,Winnipeg',
  //13
  '130RegentAveE,Winnipeg',
  //14
  '336Broadway,Winnipeg',
  //15
  'M1twfHUJyctCwEvf8'
];
function setMap(n, l) {
  //sets the the div the iframe is in to block
  div[l].style.display = ' block';

  //Add property of src to the shopMap iframe
  shopMap[l].setAttribute(
    'src',
    'https://www.google.com/maps?q=' + locationSelector[n] + '&output=embed'
  );
}
