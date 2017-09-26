var baseUrl = "http://www.szqmak.com/Handler/ApI.ashx?";
module.exports = {
  cardList: baseUrl.concat('action=prolist&type_id=1'),
  proinfo: baseUrl.concat('action=proinfo&id='),

}