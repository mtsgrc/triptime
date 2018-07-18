import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/fromPromise';

declare var serviceDiscovery: any;

@Injectable()
export class DiscoveryService {
    constructor() {}

    discoverParticleServices(): Observable<any> {
        console.log('Start service discovery');
        return Observable.fromPromise(
            new Promise((resolve, reject) => {
                try {
                    serviceDiscovery.getNetworkServices(
                        'ssdp:all',
                        function(devices) {
                            const particleDevices = devices.filter(d => {
                                const dString = JSON.stringify(d);
                                return dString.match('.*Particle.*');
                            });
                            console.log(JSON.stringify(particleDevices));
                            resolve(particleDevices);
                        },
                        function(err) {
                            console.log('ERROR:', err);
                            resolve([]);
                        }
                    );
                } catch (err) {
                    console.log(err);
                    resolve([]);
                }
            })
        );
    }
}
