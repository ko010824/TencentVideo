<template>
    <div class="body-bg">
        <div class="login-qq-container">
            <div class="login-qq">
                <div class="logo-qq-vip"></div>
                <div class="web-login">
                    <div class="inps">
                        <input id="u" class="inputStyle g-u" name="u" autocomplete="off" placeholder="QQ号码/手机/邮箱">
                        <input id="p" class="inputStyle" maxlength="16" type="password" name="p" autocorrect="off" placeholder="请输入你的QQ密码">
                    </div>
                    <router-link to="/play">登录</router-link>
                    <a href="javascript:void(0);" class="oneKey">一键登录</a>
                    <div class="switch">
                        <div class="zc-feedback">
                            <span class="zc" onclick="window.open('https\x3A\x2F\x2Fssl.ptlogin2.qq.com\x2Fj_newreg_url')">注册新帐号</span>
                            <span class="forgetpwd">忘了密码？</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "loginQQ",
    }
</script>

<style scoped>
    @import '../assets/css/loginQQ.css';
    .body-bg{
        width: 100%;
        height: 100%;
        background: #eee;
    }
</style>