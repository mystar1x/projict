var arr=[[0,0,0],[0,0,0],[0,0,0]];
var chance=1;

function func(a,b)
{
	arr[a-1][b-1]=chance;
	draw();
	check();
	if(chance==1)
		chance=2;
	else
		chance=1;
}

function draw()
{
	for (var i = 1 ; i <= 3 ; i++)
	{
		for (var j = 1; j <= 3; j++) 
		{
			var s=i+""+j;
			if(arr[i-1][j-1]==1)
				document.getElementById(s).innerHTML="<img src='x.jpg' width=100% height=35%>";
			if(arr[i-1][j-1]==2)
				document.getElementById(s).innerHTML="<img src='o.jpg' width=100% height=35%>";
		}
	}
}

function check()
{
	var count=0;
	if(arr[0][0]==arr[0][1] && arr[0][0]==arr[0][2] && arr[0][0]!=0)
		alert("Player "+chance+" win");
	else if(arr[1][0]==arr[1][1] && arr[1][0]==arr[1][2] && arr[1][0]!=0)
		alert("Player "+chance+" win");
	else if(arr[2][0]==arr[2][1] && arr[2][0]==arr[2][2] && arr[2][0]!=0)
		alert("Player "+chance+" win");
	else if(arr[0][0]==arr[1][0] && arr[0][0]==arr[2][0] && arr[0][0]!=0)
		alert("Player "+chance+" win");
	else if(arr[0][1]==arr[1][1] && arr[0][1]==arr[2][1] && arr[0][1]!=0)
		alert("Player "+chance+" win");
	else if(arr[0][2]==arr[1][2] && arr[0][2]==arr[2][2] && arr[0][2]!=0)
		alert("Player "+chance+" win");
	else if(arr[0][0]==arr[1][1] && arr[0][0]==arr[2][2] && arr[0][0]!=0)
		alert("Player "+chance+" win");
	else if(arr[0][2]==arr[1][1] && arr[0][2]==arr[2][0] && arr[0][2]!=0)
		alert("Player "+chance+" win");
	for(var i=0;i<3;i++)
		for(var j=0;j<3;j++)
			if(arr[i][j]!=0)
				count++;
	if(count==9)
		alert("Draw");
}