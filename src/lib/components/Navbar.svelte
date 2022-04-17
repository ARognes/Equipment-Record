<script lang="ts">
	import projectsSVG from '$lib/images/location.svg'
	import equipmentSVG from '$lib/images/excavator.svg'
	import homeSVG from '$lib/images/home.svg'
	import historySVG from '$lib/images/history.svg'
	import accountSVG from '$lib/images/account.svg'

  export let path : string = 'on'
</script>


<div id="navbar">
	<a href="/{ path }/projects"><img src={ projectsSVG } alt=""></a>
	<a href="/{ path }/equipment"><img src={ equipmentSVG } alt=""></a>
	<a href="/{ path }/home"><img src={ homeSVG } alt=""></a>
	<a href="/{ path }/history"><img src={ historySVG } alt=""></a>
	<a href="/{ path }/account"><img src={ accountSVG } alt=""></a>
</div>


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
		width: max-content;
		height: 60px;
		flex: 1;
		text-align: center;
		line-height: 60px;
		font-size: large;
		background-color: aqua;
	}

	#navbar a img {
		margin-top: 14px;
		width: 30px;
		height: 30px;
	}

</style>