const url1 = 'https://www.alipay.com?width=123&height=567&dpi=2#name';
const url2 =
	'https://www.google.com.hk/search?newwindow=1&safe=strict&rlz=1C5CHFA_enHK923HK923&ei=fqq_X7zWBpCymAWz9oz4CQ&q=test&oq=test&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEENQz5BAWO2SQGChnkBoAHAAeACAAbABiAGoBpIBAzMuNJgBAKABAaoBB2d3cy13aXrAAQE&sclient=psy-ab&ved=0ahUKEwi8jYu6paDtAhUQGaYKHTM7A58Q4dUDCA0&uact=5';

// 获取查询参数的值
// 2#name
function getUrlParamByKey(url, key) {
	const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
	const matchObj = url.match(reg);
	if (matchObj) return decodeURIComponent(matchObj[2]);
	return null;
}
console.log(getUrlParamByKey(url1, 'dpi'));

// TODO: 用正则怎么写
// { width: '123', height: '567', dpi: '2#name' }
function queryParse(url) {
	let paramsObj = {};
	const queryString = url.split('?')[1];
	if (queryString) {
		queryString.split('&').forEach((i) => {
			paramsObj[i.split('=')[0]] = i.split('=')[1];
		});
	}
	return paramsObj;
}
console.log(queryParse(url1));
