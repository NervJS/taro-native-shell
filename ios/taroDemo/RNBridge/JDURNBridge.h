//
//  JDURNBridge.h
//  jdfriendlyshop4b
//
//  Created by 朱国强 on 2019/1/29.
//  Copyright © 2019年 650 Industries, Inc. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

NS_ASSUME_NONNULL_BEGIN

@interface JDURNBridge : RCTEventEmitter <RCTBridgeModule>

+ (void)emitEventWithName:(NSString *)name andPayload:(NSDictionary *)payload;

@end

NS_ASSUME_NONNULL_END
