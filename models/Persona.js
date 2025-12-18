import mongoose from 'mongoose';

const SignalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  weight: { type: Number, required: true, min: 1, max: 5 },
  source: { type: String, required: true }
});

const CampaignSchema = new mongoose.Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  channel: { type: String, required: true },
  budget: { type: String, required: true },
  expectedCPA: { type: String, required: true }
});

const DemographicsSchema = new mongoose.Schema({
  age: String,
  location: String,
  income: String
});

const PersonaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, enum: ['high', 'medium', 'low'], default: 'medium' },
  industry: { type: String, required: true },
  demographics: DemographicsSchema,
  signals: [SignalSchema],
  brandsFollowed: [String],
  conversionScore: { type: Number, min: 0, max: 100 },
  campaigns: [CampaignSchema],
  isCustom: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

PersonaSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.models.Persona || mongoose.model('Persona', PersonaSchema);
