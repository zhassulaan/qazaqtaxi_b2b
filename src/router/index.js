import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/b2b',
		component: () => import('@/layouts/Default.vue'),
		children: [
			{
				path: 'analytics',
				name: 'Analytics',
				children: [
					{
						path: '',
						redirect: 'b2b/analytics/list',
					}, {
						path: 'list',
						name: 'AnalyticsList',
						component: () => import('@/views/AnalyticsList.vue'),
					}, {
						path: 'archive',
						name: 'AnalyticsArchive',
						component: () => import('@/views/AnalyticsArchive.vue'),
					},
				],
			}, {
				path: 'wallet',
				name: 'Wallet',
				component: () => import('@/views/Wallet.vue'),
			}, {
				path: 'history',
				name: 'TravelHistory',
				component: () => import('@/views/History.vue'),
			}, {
				path: 'admin',
				name: 'B2B admin',
				children: [
					{
						path: '',
						redirect: 'b2b/admin/list',
					}, {
						path: 'list',
						name: 'AdminList',
						component: () => import('@/views/AdminList.vue'),
					}, {
						path: 'archive',
						name: 'AdminArchive',
						component: () => import('@/views/AdminArchive.vue'),
					}, {
						path: 'applications',
						name: 'AdminApplications',
						component: () => import('@/views/AdminApplications.vue'),
					},
				],
			},
		],
	}, {
		path: '/b2b',
		component: () => import('@/layouts/Auth.vue'),
		children: [
			{
				path: 'login',
				name: 'Login',
				component: () => import('@/views/Login.vue'),
			}, {
				path: 'signup',
				name: 'Signup',
				component: () => import('@/views/Signup.vue'),
			},
		],
	}, {
		path: '/:pathMatch(.*)*',
		redirect: '/b2b/login/',
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
