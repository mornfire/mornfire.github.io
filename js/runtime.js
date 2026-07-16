// 网站运行时间统计
(function() {
  // 设置服务器开服日期（年, 月-1, 日, 时, 分, 秒）
  var startDate = new Date(2025, 6, 1, 0, 0, 0); // 2025年7月1日 00:00:00

  function updateRuntime() {
    var now = new Date();
    var diff = now - startDate;

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    var runtimeText = '已运行 ' + days + ' 天 ' + hours + ' 时 ' + minutes + ' 分 ' + seconds + ' 秒';
    var element = document.getElementById('runtime');
    if (element) {
      element.textContent = runtimeText;
    }
  }

  updateRuntime();
  setInterval(updateRuntime, 1000);
})();