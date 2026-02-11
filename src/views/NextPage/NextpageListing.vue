<template>
    <div class="app">
        <div>
            <el-button type="primary" plain @click="handleGoBack()">Go Back</el-button>
            <el-button type="primary" @click="handleNextPage">Go To Child Page</el-button>
        </div>
    </div>
</template>

<script>
export default {
	name: "NextPageListing",
	components: {},
	data() {
		return {};
	},
	methods: {
        handleNextPage() {
            this.$router.push({ path: '/next-page/details' });
        },
        handleGoBack() {
            this.$router.back(-1);
        }
    },
};
</script>
<style scoped></style>