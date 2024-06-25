import AwsResourceFactory from "./aws_resource.factory";
import Client from "./client";
import GoogleCloudResourceFactory from "./googlecloud_resource.factory";
import Instance, { Capacity } from "./instance";

(function test() {

    const aws:Client = new Client(new AwsResourceFactory());
    let awsInstance: Instance = aws.createServer(Capacity.micro, 20480);
    awsInstance.start();
    awsInstance.stop();
    
    console.log("\n*********************************\n");

    const gcp:Client = new Client(new GoogleCloudResourceFactory());
    let gcpInstance: Instance = gcp.createServer(Capacity.large, 20480);
    gcpInstance.start();
    gcpInstance.stop();
})();