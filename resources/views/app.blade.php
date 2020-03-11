<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
	<!-- <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
	<script src="{{ mix('/js/app.js') }}" defer></script>
	<script src="/js/alert.js" defer></script> -->
</head>

<body>
	@inertia

	@if(env('APP_ENV') === 'local')
	<script src="http://localhost:3000/static/js/bundle.js"></script>
	<script src="http://localhost:3000/static/js/main.chunk.js"></script>
	<script src="http://localhost:3000/static/js/0.chunk.js"></script>
	<script src="http://localhost:3000/static/js/1.chunk.js"></script>
	<script src="http://localhost:3000/static/js/2.chunk.js"></script>
	<script src="http://localhost:3000/static/js/3.chunk.js"></script>
	<!-- <script src="http://localhost:3000/static/js/4.chunk.js" defer></script>
	<script src="http://localhost:3000/static/js/5.chunk.js" defer></script>
	<script src="http://localhost:3000/static/js/6.chunk.js" defer></script>
	<script src="http://localhost:3000/static/js/7.chunk.js" defer></script> -->
	@else
	<script src="/js/app.js"></script>
	@endif

</body>

</html>
