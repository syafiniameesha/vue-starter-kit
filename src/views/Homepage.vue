<template>
    <div class="app">
        <p>Testing Hompage</p>
        <el-button type="primary" @click="showPopup = true">Popup</el-button>
        
        <!-- show dialog project -->
        <Base-Popup 
            :visible="showPopup"
            title="My Custom Popup"
            message="This is a customizable popup message."
            @close-popup="closePopup"
        />
    </div>
</template>

<script>

export default {
	name: "Dashboard",
    components: {},
	data() {
		return {
            showPopup: false,
		};
	},
    methods: {
        closePopup() {
            this.showPopup = false;
        }
    },
};
</script>

<style lang="scss" scoped>
.app {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
}
</style>