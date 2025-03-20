// 这里可以添加更多的JavaScript代码来处理菜单点击事件、数据交互等功能
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const employeeId = document.getElementById('employeeId').value;
        const password = document.getElementById('password').value;
        const office = document.getElementById('office').value;
        const accountingSet = document.getElementById('accountingSet').value;

        // 这里可以添加实际的登录验证逻辑，例如发送AJAX请求到后端
        console.log('工号: ' + employeeId);
        console.log('密码: ' + password);
        console.log('Office: ' + office);
        console.log('财务账套: ' + accountingSet);

        // 示例：简单的验证，这里只是演示，实际中需要更严格的验证
        if (employeeId === '' || password === '' || office === '' || accountingSet === '') {
            alert('请填写所有必填字段');
        } else {
            // 这里可以添加更多逻辑，如发送数据到服务器进行验证等
            alert('登录信息已提交，正在验证...');
        }
    });
});





// 这里可以添加更多的JavaScript代码来处理菜单点击事件、数据交互等功能

// 示例：退出功能
$(document).ready(function () {
    $('.logout a').click(function (e) {
        e.preventDefault();
        // 这里可以添加实际的退出逻辑，例如清除会话、跳转到登录页面等
        alert('已退出登录');
    });
});