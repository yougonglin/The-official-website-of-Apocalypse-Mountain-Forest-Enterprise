// 检测浏览器语言设置
const isChineseLang = navigator.language === 'zh-CN' || 
					 navigator.language === 'zh' || 
					 navigator.languages.includes('zh-CN');

// 检测时区（中国标准时区UTC+8）
const chinaTimezone = /UTC\+08:00|Asia\/Shanghai/;
const isChinaTimezone = chinaTimezone.test(new Date().toString());

if(!location.href.includes('jiechurenlei.com') && !location.href.includes('127.0.0.1') ){
	// 如果语言或时区符合中国大陆特征
	if (isChineseLang || isChinaTimezone) {
		window.location.href = 'https://www.jiechurenlei.com/'; // 替换为目标URL
	}
}