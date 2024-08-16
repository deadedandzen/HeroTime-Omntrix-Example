PalladiumEvents.registerAnimations((event) => {
    event.register('herotime/test', 15, (builder) => {
        if (abilityUtil.isEnabled(builder.getPlayer(), "grave.ht:test_omnitrix", "prime")) {
            
            if (builder.isFirstPerson()) {
                // do first-person animations
                builder.get('left_arm')
                    .setXRotDegrees(-110)
                    .setYRotDegrees(35)
                    .setZRotDegrees(-40)
                    .setX(11)
                    .setY(7.5)
                    .setZ(1)

                builder.get('right_arm')
                    .setXRotDegrees(-80)
                    .setYRotDegrees(7)
                    .setZRotDegrees(0)
                    .setX(-1.5)
                    .setY(-1)
                    .setZ(-2.5)
            } else {
                // do third-person animations
                builder.get('left_arm')
                    .setXRotDegrees(-120)
                    .setZRotDegrees(-120)
                    .setYRotDegrees(30)

                builder.get('right_arm')
                    .setXRotDegrees(-80)
                    .setZRotDegrees(10)
                    .setYRotDegrees(-40)
                    
            }
        }

    });
});