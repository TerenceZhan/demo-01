import { Module } from '@nestjs/common';
import { FeaturesService } from './features.service';
import { FeatureModule } from './feature/feature.module';

@Module({
  providers: [FeaturesService],
  exports: [FeaturesService],
  imports: [FeatureModule],
})
export class FeaturesModule {}
