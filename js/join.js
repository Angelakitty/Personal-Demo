/*�������ǰ��*/

function checkData6(){    /*checkData()��JS�ű��������Ա������ڽ��������ύ��������ǰ���ܶԱ�����д�Ĳ������ݵĺϷ��Խ��б�Ҫ�ļ���*/
		var name = document.getElementById("txtName").value;   /*var obj = document.getElementById(ҳ��Ԫ��id)*/
		if(!name)
		{
			alert("������������");
			return false;
		}
		else if( (document.getElementById("boy").checked==false) && (document.getElementById("girl").checked==false) )
		{
			alert("��ѡ���Ա�");
			return false;
		}
		
		return true;
}
function check6(){
		var r = checkData6(); 
		return r;
}


function showImg(){
		var img=document.getElementById("img1");
		img.style.display="block";
}
					
function hideImg(){
		var img = document.getElementById("img1");
		img.style.display ="none";
}
