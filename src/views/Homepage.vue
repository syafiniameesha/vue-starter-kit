<template>
    <div class="app">
        <p>Testing Hompage</p>
        <div class="grp-btn">
            <el-button type="primary" plain @click="showPopup = true">Popup</el-button>
            <el-button type="primary" @click="handleNextPage()">Next Page</el-button>
        </div>
        
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
        },
        handleNextPage() {
            this.$router.push({ path: '/next-page' });
        }
    },
};
</script>

<style lang="scss" scoped>
</style>