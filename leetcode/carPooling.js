const trips = [[2,1,5],[3,3,7]], capacity = 4
var carPooling = function(trips, capacity) {
    var str_start=[];           //记录整个记录的开始数组，与原来的数组的下标相对应
	var str_end=[];             //记录整个记录的结束数组，与原来的数组的下标相对应
	var str_num=[];             //记录每个地点上车乘客的数量
	var p_num=0;        //记录乘客数量
	for(let i=0;i<trips.length;i++){     
		str_num.push(trips[i][0]);
		str_start.push(trips[i][1]);
		str_end.push(trips[i][2]);
	}

	var dis_max=trips[0][2];      //记录最大距离
	for(let i=0;i<trips.length;i++){     
		if(dis_max<trips[i][2]){
			dis_max=trips[i][2];
		}
	}

	for(var i=1;i<=dis_max;i++){                             //乘车假定都为先下后上
		var str_end_1=[...str_end];                           //数组复制
		while(str_end_1.indexOf(i)!==-1){                         //下车
			p_num=p_num-str_num[str_end_1.indexOf(i)];
			str_end_1[str_end_1.indexOf(i)]='';
		};
		if(p_num<0){
			return(false);
		}

		var str_start_1=[...str_start];                           //数组复制
		while(str_start_1.indexOf(i)!==-1){                              //上车
			p_num=p_num+str_num[str_start_1.indexOf(i)];
			str_start_1[str_start_1.indexOf(i)]='';
		}
		if(p_num>capacity){
			return(false);
		}
	}
	return(true);
};

let flag = carPooling(trips, capacity)

console.log(flag)