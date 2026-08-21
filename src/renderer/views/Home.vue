<script setup>

</script>

<template>
    <div class="title">
        On-line Mode
    </div>
    <div class="container">
        <div class="left">
            <button class="btn_pri">
                <div class="center">
                    <el-icon :size="30">
                        <User />
                    </el-icon>
                    <div class="text Chinese">私人联机</div>
                    <div class="text English">Private</div>
                </div>
                <div class="shadow"></div>
            </button>
        </div>
        <div class="border-bwt">
        </div>
        <div class="right">
            <button class="btn_service">
                <div class="center">
                    <el-icon :size="30">
                        <OfficeBuilding />
                    </el-icon>
                    <div class="text Chinese">服务器联机</div>
                    <div class="text English">Service</div>
                </div>

                <div class="shadow"></div>
            </button>

        </div>

    </div>
</template>



<style scoped>
body {
    background-color: var(--color-bg);

}

.title {
    text-align: center;
    font-size: 20px;
    font-weight: 900;
    color: var(--color-title);
    font-family: var(--family-title);

}

.container {
    height: 100%;
    width: 100%;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    color: var(--color-text);
    transition: all ease 0.3s;
    justify-content: center;
    align-content: center;
    align-items: center;

    .left {
        height: 100%;
        width: 50%;
        display: flex;
        justify-content: center;
        align-content: center;
        box-sizing: border-box;
    }

    .border-bwt {
        display: flex;
        height: 95%;
        width: 2px;
        background-color: var(--color-bg-border);
        border-radius: 1000px;
        clip-path: polygon(0% 50%,
                /* 左侧尖角 */
                45% 0%,
                /* 上沿往中间鼓起 */
                100% 50%,
                /* 右侧尖角 */
                45% 100%
                /* 下沿往中间鼓起 */
            );
    }

    .right {
        height: 100%;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }
}

button:hover {
    /* background-color: #3130300f; */
    outline: hidden;
    border: 0;
    color: var(--color-selected-text);
    transform: translateY(-20px);
}

button:active {
    /* background-color: #31303015; */
    outline: hidden;
    border: 0;
    transition: all ease 0.1s;
    transform: translateY(0px);
}

button {
    outline: hidden;
    background-color: transparent;
    border: 0;
    height: 100%;
    width: 100%;
    color: var(--color-text-muted);
    font-family: var(--family-title);
    transition: all ease 0.4s;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.center {
    width: 20%;
    height: 15%;
    box-sizing: border-box;
    padding: 2% 0%;
}

.shadow {
    background-color: transparent;
    width: 100px;
    height: 1px;
    box-shadow: rgba(0, 0, 0, 0.366) 0px 30px 15px 1px;
}

.text {
    transition: all ease 0.6s;

}
</style>