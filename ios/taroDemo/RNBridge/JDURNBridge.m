//
//  JDURNBridge.m
//  jdfriendlyshop4b
//
//  Created by 朱国强 on 2019/1/29.
//  Copyright © 2019年 650 Industries, Inc. All rights reserved.
//

#import "JDURNBridge.h"

@implementation JDURNBridge

@synthesize bridge = _bridge;
// To export a module named JDURNBridge
RCT_EXPORT_MODULE()

// This is our static function that we call from our code
+ (void)emitEventWithName:(NSString *)name andPayload:(NSDictionary *)payload
{
    // userInfo requires a dictionary so we wrap out name and payload into an array and stick
    // that into the dictionary with a key of 'detail'
    NSDictionary *eventDetail = @{@"detail":@[name, payload]};
    [[NSNotificationCenter defaultCenter] postNotificationName:@"event-emitted"
                                                        object:self
                                                      userInfo:eventDetail];
}

+ (BOOL)requiresMainQueueSetup
{
    return NO;
}

- (instancetype)init
{
    self = [super init];
    if (self) {
        
    }
    return self;
}

#pragma mark - RCT_EXPORT_METHOD
RCT_EXPORT_METHOD(checkLogin:(RCTResponseSenderBlock)callback)
{
    BOOL hasLogined = NO;
    if (hasLogined) {
        // 已登录
      
    } else {
      
    }
    NSLog(@"hasLogined = %d", hasLogined);
}

- (NSArray<NSString *> *)supportedEvents
{
    return @[@"UserDidLoginNotify"];
}

- (void)startObserving
{
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(emitEventInternal:)
                                                 name:@"event-emitted"
                                               object:nil];
}

// This will stop listening if we require it
- (void)stopObserving
{
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

// This will actually throw the event out to our Javascript
- (void)emitEventInternal:(NSNotification *)notification
{
    // We will receive the dictionary here - we now need to extract the name
    // and payload and throw the event
    NSArray *eventDetails = [notification.userInfo valueForKey:@"detail"];
    NSString *eventName = [eventDetails objectAtIndex:0];
    NSDictionary *eventData = [eventDetails objectAtIndex:1];
    
    [self sendEventWithName:eventName
                       body:eventData];
}

@end
