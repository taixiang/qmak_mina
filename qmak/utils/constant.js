var baseUrl = "https://s.szqmak.com/Handler/ApI.ashx?";
module.exports = {
  cardList: baseUrl.concat('action=prolist&type_id='), //列表
  proinfo: baseUrl.concat('action=proinfo&id='), //信用卡信息
  userRecord: baseUrl.concat("action=member_apply&openid="), //个人记录
  applyType: baseUrl.concat("action=apply_type "), //贷款类型
  proSubmit: baseUrl.concat("action=proinfo_submit&id="), //提交
  noticeList: baseUrl.concat("action=notice"), //公告列表
  noticeDetail: baseUrl.concat("action=notice_details&id=") //公告详情

}