package cn.edu.gdmec.t00385.remoteservicedemo;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.os.RemoteException;

public class RemoteServiceDemo extends Service {

	@Override
	public IBinder onBind(Intent arg0) {
		// TODO Auto-generated method stub
		return mBinder;
	}

	private final IMathService.Stub mBinder = new IMathService.Stub() {
		
		@Override
		public long Add(long a, long b) throws RemoteException {
			long result = a +b;
			return result;
		}

		@Override
		public AllResult CompuerAny(long a, long b) throws RemoteException {
			long addResult = a +b;
			long subResult = a-b;
			long mulResult =a*b;
			double divResult = a/b;
			AllResult allResult = new AllResult(addResult,subResult,mulResult,divResult);
			return allResult;	
		}
	};
}
