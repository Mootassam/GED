<!DOCTYPE html>
<html>

<head>
	<title>Appify</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="">
	<meta name="author" content="">
	<link rel="shortcut icon" href="css/images/favicon.ico">
	<link href="http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel='stylesheet' type='text/css'>

	<link rel="stylesheet" href="{{asset('css/css/all.css')}}" >
	<link rel="stylesheet" href="{{asset('css/css/metisMenu.css')}}">
	<link rel="stylesheet" href="{{asset('css/css/elegant-icons.css')}}">
	<link rel="stylesheet" href="{{asset('css/css/pe-7-icons.css')}}">
	<link rel="stylesheet" href="{{asset('css/css/pe-7-icons-helper.css')}}">
	<link rel="stylesheet" href="{{asset('css/css/shepherd-default.css')}}">
	<link rel="stylesheet" href="{{asset('css/css/jstree-default.css')}}">
	<link rel="stylesheet" href="{{asset('css/css/styles.css')}}">
    <link rel="stylesheet" href="{{asset('css/css/account.css')}}">



</head>
<body class="preload" >

		<div id="app" class="content-wrapper view view-account">
		<div class="container-fluid">
			<h2 class="view-title">My Account</h2>
			<div class="row">
				<div class="module-wrapper col-12">
					<section class="module">
						<div class="module-inner">
                            <nav-simplemde></nav-simplemde>

                            <router-view></router-view>


							</div>

						</section>

					</div>

				</div>

			</div>

		</div>

	<!-- *****DEMO THEME CONFIG****** -->




        <script src="{{asset('js/bootstrap.js')}}"></script>
		<script src="{{asset('js/js/popper.js')}}"></script>
		<script src="{{asset('js/js/bootstrap.js')}}"></script>
		<script src="{{asset('js/js/metisMenu.js')}}"></script>
		<script src="{{asset('js/js/imagesloaded.js')}}"></script>

        <script src="{{asset('js/app.js')}}"></script>

	</body>

</html>
