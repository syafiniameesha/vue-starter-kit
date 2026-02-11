<template>
    <div class="app">
        <p>Next Page Details</p>

        <el-button type="primary" @click="handleGoBack()">Go Back</el-button>

    </div>
</template>

<script>

export default {
	name: "NextPageDetails",
    components: {},
	data() {
		return {
		};
	},
    methods: {
        handleGoBack() {
            this.$router.back(-1);
        }
    },
};
</script>

<style lang="scss" scoped>
</style>