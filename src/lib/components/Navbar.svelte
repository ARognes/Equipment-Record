<script lang="ts">
	import ProjectsSVG from '$lib/assets/location.svg'
	import EquipmentSVG from '$lib/assets/excavator.svg'
	import HomeSVG from '$lib/assets/home.svg'
	import HistorySVG from '$lib/assets/history.svg'
	import AccountSVG from '$lib/assets/account.svg'

  export let path : string = 'on'
</script>


<nav id="navbar">
	<a sveltekit:prefetch href="/{ path }/projects">
		<ProjectsSVG width="40" height="40" />
	</a>
	<a sveltekit:prefetch href="/{ path }/equipment">
		<EquipmentSVG width="40" height="40" />
	</a>
	<a sveltekit:prefetch href="/{ path }/home">
		<HomeSVG width="40" height="40" />
	</a>
	<a sveltekit:prefetch href="/{ path }/history">
		<HistorySVG width="40" height="40" />
	</a>
	<a sveltekit:prefetch href="/{ path }/account">
		<AccountSVG width="40" height="40" />
	</a>
</nav>


<style>

  #navbar {
		position: fixed;
		bottom: 0; left: 0; right: 0;
		height: auto;
		background-color: #bbf;
		display: flex;
	}

	#navbar a {
		margin: 0;
		padding: 0;
		border: 0;
		width: 20vw;
		height: 60px;
		flex: 1;
		text-align: center;
		line-height: 60px;
		font-size: large;
		background-color: aqua;
	}

</style>