#include <iostream>
#include <string>
#include <cstdlib>
#include <ctime>
#include <fstream>
#include <Windows.h>

using namespace std;
int number = ;   /*�г]�w*/           // �ռ� 
int MaxOfTopicN = 100;               // Topic�ƶq 
int MaxOfTopicL = 20;                //  Topic���� 
float SR = ;   /*�г]�w*/            // �ۦ��� SR (similarity ratio)
float WP = ;   /*�г]�w*/            //�h�t�ťX�{�� WP (multi-field wildcard percentage ratio) 

int main(){
	
	string *sqe;
	string *sre;
	string *sqe2;
	
	ifstream inStream;
	ofstream outStream;
	outStream.open("DFA_input.txt");
	ofstream outStream2;
	outStream2.open("qlobber_input.txt");	
    srand(time(NULL));
	int topic_length;
	int length;
	int sqeL;
    string charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	int test;
    string random_string;
    int Nw;
	for(int z = 0; z < number; z++){
		if(z == number - 1){
			cout << "Finish\n";
		}
		if(z>400000){
			cout << z << endl;
		}
		else{
			if(z % 1000 == 0){
				cout << z << endl;
			}		
		}
		topic_length = rand() % MaxOfTopicN + 1;  

		sqeL = topic_length;
		sqe = new string[topic_length];  
		sqe2 = new string[topic_length];       
		for(int j = 0; j < topic_length ; ++j){
			Nw = 0;

	   		string random_string;
	   		length = rand() % MaxOfTopicL + 1;      
		  
	   		for (int i = 0; i < length; i++)
	    	{
        		int index = rand() % charset.size();
        		random_string += charset[index]; 
	   		}
	    	bool duplicate = false;
	    	sqe[j] = random_string;
	    	for(int k = 0; k < j; ++k){
				if(k < j && sqe[k] == random_string && sqe[j] != "#" && sqe[j] != "+"){
					duplicate = true;
				}
			}
			if(duplicate){
				j--;
				continue;
			}
		}
		int lengthOfSQE = topic_length;
		// + # 
		int Nwild_card = (float)topic_length * WP;
	    int *indices;
	    indices = new int[Nwild_card];
	    
	    for (int i = 0; i < Nwild_card; i++) {
	        bool duplicate;
        	do {
	            duplicate = false;
	            indices[i] = rand() % topic_length;
	            for (int j = 0; j < i; j++) {
	                if (indices[j] == indices[i]) {
	                    duplicate = true;
	                    break;
	                }
	            }
        	} while (duplicate);
	    }
	    Nw = 0; 
	    for (int i = 0; i < Nwild_card; i++) {
	        string s;                   
			int tet = rand() % 2 + 1;
			if(tet == 1){
				s = "+"; 
			}
			if(tet == 2){
				if(Nw >= 3){
					s = "+";
				}
				else{
					s = "#";
					Nw++;	
				}
			}
			sqe[indices[i]] = s;
	    } 
	    for(int i = 0; i < topic_length; ++i){
	    	if(sqe[i] == "+"){
	    		sqe2[i] = "*";
			}
			else{
				sqe2[i] = sqe[i];
			}
		}
	    
	    for(int i = 0; i < topic_length; ++i){
			outStream << sqe[i];
			outStream2 << sqe2[i];
			if(i < topic_length-1){
				outStream << ".";
				outStream2 << ".";
			}
		}
		/*---------------------------------------�H�W�OSQE---------------------------------------*/
		
		outStream << ",";
		outStream2 << ",";
		
		/*---------------------------------------�H�U�OSRE---------------------------------------*/
		topic_length = rand() % MaxOfTopicN + 1;  
		sre = new string[topic_length]; int start;
		int Nsame;	
		int Nsame1 = (float)topic_length * SR;
		int Nsame2 = (float)lengthOfSQE * SR; 	
		if(Nsame1 < Nsame2){
			Nsame = Nsame1;
		}
		else{
			Nsame = Nsame2;
		}
		int dwe = 0;
		for(int i = 0; i < Nsame && i < sqeL; ++i){
			if(sqe[i] == "+" || sqe[i] == "#"){
				string random_string;
		   		int len =  rand() % MaxOfTopicL + 1;
		   		for (int i = 0; i < len; i++)
		    	{
		        	int index = rand() % charset.size();
		        	random_string += charset[index]; 
					  
		   		}
				sre[i] = random_string;
			}
			else{
				sre[i] = sqe[i];	
			}
			dwe = i;
		}         
		start = dwe;
		if(Nsame == 0){
			start = -1;
		}
		for(int j = start+1; j < topic_length ; ++j){
	    	
	    	if(j >= topic_length){
	    		break;
			}
	   		string random_string;
	   		length =  rand() % MaxOfTopicL + 1;     
	   		for (int i = 0; i < length; i++)
	    	{
	        	int index = rand() % charset.size();
	        	random_string += charset[index]; 	  
	   		}
	   	 	bool duplicate = false;
	    	sre[j] = random_string;
	    	for(int k = 0; k < j; ++k){
				if(k < j && sre[k] == random_string){
					duplicate = true;
				}
			}
			if(duplicate){
				j--;
				continue;
			}
		}
		for(int i = 0; i < topic_length; ++i){
			outStream << sre[i] ;
			outStream2 << sre[i] ;
			if(i < topic_length-1){
				outStream << ".";
				outStream2 << "." ;
			}
		}
		outStream << endl;
		outStream2 << endl;
		delete sqe;
		delete sqe2;
		delete sre;
	}
	
	ShellExecute(NULL, "open", "DFA_input.txt", NULL, NULL, SW_SHOWNORMAL);
    ShellExecute(NULL, "open", "qlobber_input.txt", NULL, NULL, SW_SHOWNORMAL);

    return 0;
}

