<template>
    <div class="body-bg">
        <div class="login-container">
            <div class="login-cont-user">
                <div class="l-user-img"><img src="../assets/img/default_160.png" alt=""/></div>
                <p class="l-user-nick">1秒登录腾讯视频</p>
                <p class="l-user-txt">微信和QQ是两个独立账号，账号信息不互通</p>
            </div>
            <div class="login-cont-change-user">
                <a href="javascript:void(0);">
                    <i class="u-icon-wx"></i>
                    <span class="u-change-txt">微信登录</span>
                </a>
                <router-link to="/play/login/loginQQ">
                    <i class="u-icon-qq"></i>
                    <span class="u-change-txt">QQ登录</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
    }
</script>

<style scoped>
    @import "../assets/css/login.css";
    .body-bg{
        width: 100%;
        height: 100%;
        background: url('../assets/img/bg_body_login.jpg')no-repeat center center;
        background-size: cover;
    }
</style>