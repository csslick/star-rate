# star-rate
- star rate plug-in, 2022-01-21 v0.1, by CSSLICK
- 별점 기능

# How to Use(사용방법)

## Usable attribute value
1. data-value: star value(0 ~ 100_
2. data-size: star size

## code
```
<head>
  ...
  <!-- Plug-in here -->
	<link href="star-rate.css" rel="stylesheet" type="text/css" />
  <script src="star-rate.js"></script>
</head>

<body>

  <div class="star-rate-wapper">
	  <span class="star-rate" data-value="0" data-size="16"></span>
    <span class="star-rate" data-value="25" data-size="16"></span>
    <span class="star-rate" data-value="50" data-size="16"></span>
    <span class="star-rate" data-value="75" data-size="16"></span>
    <span class="star-rate" data-value="100" data-size="16"></span>
  </div>
  
  <script>
    // run star-rate
    let star  = new Star_rate();
    star.set();
  </script>
  
 </body>
```


