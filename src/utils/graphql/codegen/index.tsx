import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Long: any;
};

export type ApiVersion = {
  __typename?: 'APIVersion';
  x: Scalars['Int'];
  y: Scalars['Int'];
  z: Scalars['Int'];
};

export type AdverseEvent = {
  __typename?: 'AdverseEvent';
  count: Scalars['Long'];
  logLR: Scalars['Float'];
  meddraCode?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type AdverseEvents = {
  __typename?: 'AdverseEvents';
  count: Scalars['Long'];
  criticalValue: Scalars['Float'];
  rows: Array<AdverseEvent>;
};

export type Aggregation = {
  __typename?: 'Aggregation';
  aggs?: Maybe<Array<Aggregation>>;
  key: Scalars['String'];
  uniques: Scalars['Long'];
};

export type AggregationFilter = {
  name: Scalars['String'];
  path: Array<Scalars['String']>;
};

export type Aggregations = {
  __typename?: 'Aggregations';
  aggs: Array<NamedAggregation>;
  uniques: Scalars['Long'];
};

export type AssociatedDisease = {
  __typename?: 'AssociatedDisease';
  datasourceScores: Array<ScoredComponent>;
  datatypeScores: Array<ScoredComponent>;
  disease: Disease;
  score: Scalars['Float'];
};

export type AssociatedDiseases = {
  __typename?: 'AssociatedDiseases';
  aggregations?: Maybe<Aggregations>;
  count: Scalars['Long'];
  datasources: Array<DatasourceSettings>;
  rows: Array<AssociatedDisease>;
};

export type AssociatedTarget = {
  __typename?: 'AssociatedTarget';
  datasourceScores: Array<ScoredComponent>;
  datatypeScores: Array<ScoredComponent>;
  score: Scalars['Float'];
  target: Target;
};

export type AssociatedTargets = {
  __typename?: 'AssociatedTargets';
  aggregations?: Maybe<Aggregations>;
  count: Scalars['Long'];
  datasources: Array<DatasourceSettings>;
  rows: Array<AssociatedTarget>;
};

export type BiologicalModels = {
  __typename?: 'BiologicalModels';
  allelicComposition: Scalars['String'];
  geneticBackground: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  literature?: Maybe<Array<Scalars['String']>>;
};

export type CancerHallmark = {
  __typename?: 'CancerHallmark';
  description: Scalars['String'];
  impact?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  pmid: Scalars['Long'];
};

export type CellType = {
  __typename?: 'CellType';
  level: Scalars['Int'];
  name: Scalars['String'];
  reliability: Scalars['Boolean'];
};

export type ChemicalProbe = {
  __typename?: 'ChemicalProbe';
  control?: Maybe<Scalars['String']>;
  drugId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  inchiKey: Scalars['String'];
  isHighQuality: Scalars['Boolean'];
  mechanismOfAction?: Maybe<Array<Scalars['String']>>;
  origin?: Maybe<Array<Scalars['String']>>;
  probeMinerScore?: Maybe<Scalars['String']>;
  probesDrugScore?: Maybe<Scalars['String']>;
  scoreInCells?: Maybe<Scalars['String']>;
  scoreInOrganisms?: Maybe<Scalars['String']>;
  targetFromSourceId: Scalars['String'];
  urls: Array<ChemicalProbeUrl>;
};

export type ChemicalProbeUrl = {
  __typename?: 'ChemicalProbeUrl';
  niceName: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type Constraint = {
  __typename?: 'Constraint';
  constraintType: Scalars['String'];
  exp?: Maybe<Scalars['Float']>;
  obs?: Maybe<Scalars['Long']>;
  oe?: Maybe<Scalars['Float']>;
  oeLower?: Maybe<Scalars['Float']>;
  oeUpper?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  upperBin?: Maybe<Scalars['Long']>;
  upperBin6?: Maybe<Scalars['Long']>;
  upperRank?: Maybe<Scalars['Long']>;
};

export type DataVersion = {
  __typename?: 'DataVersion';
  iteration: Scalars['Int'];
  month: Scalars['Int'];
  year: Scalars['Int'];
};

export type DatasourceSettings = {
  __typename?: 'DatasourceSettings';
  id: Scalars['String'];
  propagate: Scalars['Boolean'];
  weight: Scalars['Float'];
};

export type DatasourceSettingsInput = {
  id: Scalars['String'];
  propagate: Scalars['Boolean'];
  weight: Scalars['Float'];
};

export type Disease = {
  __typename?: 'Disease';
  ancestors: Array<Scalars['String']>;
  associatedTargets: AssociatedTargets;
  children: Array<Disease>;
  dbXRefs?: Maybe<Array<Scalars['String']>>;
  descendants: Array<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  directLocationIds?: Maybe<Array<Scalars['String']>>;
  directLocations: Array<Disease>;
  evidences: Evidences;
  id: Scalars['String'];
  indirectLocationIds?: Maybe<Array<Scalars['String']>>;
  indirectLocations: Array<Disease>;
  isTherapeuticArea: Scalars['Boolean'];
  knownDrugs?: Maybe<KnownDrugs>;
  literatureOcurrences: Publications;
  name: Scalars['String'];
  obsoleteTerms?: Maybe<Array<Scalars['String']>>;
  otarProjects: Array<OtarProject>;
  parents: Array<Disease>;
  phenotypes?: Maybe<DiseaseHpOs>;
  similarEntities: Array<Similarity>;
  synonyms?: Maybe<Array<DiseaseSynonyms>>;
  therapeuticAreas: Array<Disease>;
};


export type DiseaseAssociatedTargetsArgs = {
  BFilter?: InputMaybe<Scalars['String']>;
  Bs?: InputMaybe<Array<Scalars['String']>>;
  aggregationFilters?: InputMaybe<Array<AggregationFilter>>;
  datasources?: InputMaybe<Array<DatasourceSettingsInput>>;
  enableIndirect?: InputMaybe<Scalars['Boolean']>;
  orderByScore?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Pagination>;
};


export type DiseaseEvidencesArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  datasourceIds?: InputMaybe<Array<Scalars['String']>>;
  enableIndirect?: InputMaybe<Scalars['Boolean']>;
  ensemblIds: Array<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type DiseaseKnownDrugsArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  freeTextQuery?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type DiseaseLiteratureOcurrencesArgs = {
  additionalIds?: InputMaybe<Array<Scalars['String']>>;
  cursor?: InputMaybe<Scalars['String']>;
};


export type DiseasePhenotypesArgs = {
  page?: InputMaybe<Pagination>;
};


export type DiseaseSimilarEntitiesArgs = {
  additionalIds?: InputMaybe<Array<Scalars['String']>>;
  entityNames?: InputMaybe<Array<Scalars['String']>>;
  size?: InputMaybe<Scalars['Int']>;
  threshold?: InputMaybe<Scalars['Float']>;
};

export type DiseaseCellLine = {
  __typename?: 'DiseaseCellLine';
  id: Scalars['String'];
  name: Scalars['String'];
  tissue: Scalars['String'];
  tissueId: Scalars['String'];
};

export type DiseaseHpo = {
  __typename?: 'DiseaseHPO';
  evidence: Array<DiseaseHpoEvidences>;
  phenotypeEFO?: Maybe<Disease>;
  phenotypeHPO?: Maybe<Hpo>;
};

export type DiseaseHpoEvidences = {
  __typename?: 'DiseaseHPOEvidences';
  aspect?: Maybe<Scalars['String']>;
  bioCuration?: Maybe<Scalars['String']>;
  diseaseFromSource: Scalars['String'];
  diseaseFromSourceId: Scalars['String'];
  evidenceType?: Maybe<Scalars['String']>;
  frequency?: Maybe<Scalars['String']>;
  frequencyHPO?: Maybe<Hpo>;
  modifiers: Array<Hpo>;
  onset: Array<Hpo>;
  qualifierNot: Scalars['Boolean'];
  references: Array<Scalars['String']>;
  resource: Scalars['String'];
  sex?: Maybe<Scalars['String']>;
};

export type DiseaseHpOs = {
  __typename?: 'DiseaseHPOs';
  count: Scalars['Long'];
  rows: Array<DiseaseHpo>;
};

export type DiseaseSynonyms = {
  __typename?: 'DiseaseSynonyms';
  relation: Scalars['String'];
  terms: Array<Scalars['String']>;
};

export type Drug = {
  __typename?: 'Drug';
  adverseEvents?: Maybe<AdverseEvents>;
  approvedIndications?: Maybe<Array<Scalars['String']>>;
  blackBoxWarning: Scalars['Boolean'];
  childMolecules: Array<Drug>;
  crossReferences?: Maybe<Array<DrugReferences>>;
  description?: Maybe<Scalars['String']>;
  drugType: Scalars['String'];
  drugWarnings: Array<DrugWarning>;
  hasBeenWithdrawn: Scalars['Boolean'];
  id: Scalars['String'];
  indications?: Maybe<Indications>;
  isApproved?: Maybe<Scalars['Boolean']>;
  knownDrugs?: Maybe<KnownDrugs>;
  linkedDiseases?: Maybe<LinkedDiseases>;
  linkedTargets?: Maybe<LinkedTargets>;
  literatureOcurrences: Publications;
  maximumClinicalTrialPhase?: Maybe<Scalars['Int']>;
  mechanismsOfAction?: Maybe<MechanismsOfAction>;
  name: Scalars['String'];
  parentMolecule?: Maybe<Drug>;
  similarEntities: Array<Similarity>;
  synonyms: Array<Scalars['String']>;
  tradeNames: Array<Scalars['String']>;
  yearOfFirstApproval?: Maybe<Scalars['Int']>;
};


export type DrugAdverseEventsArgs = {
  page?: InputMaybe<Pagination>;
};


export type DrugKnownDrugsArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  freeTextQuery?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type DrugLiteratureOcurrencesArgs = {
  additionalIds?: InputMaybe<Array<Scalars['String']>>;
  cursor?: InputMaybe<Scalars['String']>;
};


export type DrugSimilarEntitiesArgs = {
  additionalIds?: InputMaybe<Array<Scalars['String']>>;
  entityNames?: InputMaybe<Array<Scalars['String']>>;
  size?: InputMaybe<Scalars['Int']>;
  threshold?: InputMaybe<Scalars['Float']>;
};

export type DrugReferences = {
  __typename?: 'DrugReferences';
  reference: Array<Scalars['String']>;
  source: Scalars['String'];
};

export type DrugWarning = {
  __typename?: 'DrugWarning';
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  meddraSocCode?: Maybe<Scalars['Int']>;
  references?: Maybe<Array<DrugWarningReference>>;
  toxicityClass?: Maybe<Scalars['String']>;
  warningType: Scalars['String'];
  year?: Maybe<Scalars['Int']>;
};

export type DrugWarningReference = {
  __typename?: 'DrugWarningReference';
  id: Scalars['String'];
  source: Scalars['String'];
  url: Scalars['String'];
};

export type EntityUnionType = Disease | Drug | Target;

export type Evidence = {
  __typename?: 'Evidence';
  alleleOrigins?: Maybe<Array<Scalars['String']>>;
  allelicRequirements?: Maybe<Array<Scalars['String']>>;
  beta?: Maybe<Scalars['Float']>;
  betaConfidenceIntervalLower?: Maybe<Scalars['Float']>;
  betaConfidenceIntervalUpper?: Maybe<Scalars['Float']>;
  biologicalModelAllelicComposition?: Maybe<Scalars['String']>;
  biologicalModelGeneticBackground?: Maybe<Scalars['String']>;
  biologicalModelId?: Maybe<Scalars['String']>;
  biomarkerName?: Maybe<Scalars['String']>;
  biomarkers?: Maybe<Biomarkers>;
  biosamplesFromSource?: Maybe<Array<Scalars['String']>>;
  cellLineBackground?: Maybe<Scalars['String']>;
  cellType?: Maybe<Scalars['String']>;
  clinicalPhase?: Maybe<Scalars['Long']>;
  clinicalSignificances?: Maybe<Array<Scalars['String']>>;
  clinicalStatus?: Maybe<Scalars['String']>;
  cohortDescription?: Maybe<Scalars['String']>;
  cohortId?: Maybe<Scalars['String']>;
  cohortPhenotypes?: Maybe<Array<Scalars['String']>>;
  cohortShortName?: Maybe<Scalars['String']>;
  confidence?: Maybe<Scalars['String']>;
  contrast?: Maybe<Scalars['String']>;
  crisprScreenLibrary?: Maybe<Scalars['String']>;
  datasourceId: Scalars['String'];
  datatypeId: Scalars['String'];
  disease: Disease;
  diseaseCellLines?: Maybe<Array<DiseaseCellLine>>;
  diseaseFromSource?: Maybe<Scalars['String']>;
  diseaseFromSourceId?: Maybe<Scalars['String']>;
  diseaseFromSourceMappedId?: Maybe<Scalars['String']>;
  diseaseModelAssociatedHumanPhenotypes?: Maybe<Array<LabelledElement>>;
  diseaseModelAssociatedModelPhenotypes?: Maybe<Array<LabelledElement>>;
  drug?: Maybe<Drug>;
  drugFromSource?: Maybe<Scalars['String']>;
  drugResponse?: Maybe<Disease>;
  geneticInteractionFDR?: Maybe<Scalars['Float']>;
  geneticInteractionMethod?: Maybe<Scalars['String']>;
  geneticInteractionPValue?: Maybe<Scalars['Float']>;
  geneticInteractionScore?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  interactingTargetFromSourceId?: Maybe<Scalars['String']>;
  literature?: Maybe<Array<Scalars['String']>>;
  log2FoldChangePercentileRank?: Maybe<Scalars['Long']>;
  log2FoldChangeValue?: Maybe<Scalars['Float']>;
  mutatedSamples?: Maybe<Array<EvidenceVariation>>;
  oddsRatio?: Maybe<Scalars['Float']>;
  oddsRatioConfidenceIntervalLower?: Maybe<Scalars['Float']>;
  oddsRatioConfidenceIntervalUpper?: Maybe<Scalars['Float']>;
  pValueExponent?: Maybe<Scalars['Long']>;
  pValueMantissa?: Maybe<Scalars['Float']>;
  pathways?: Maybe<Array<Pathway>>;
  phenotypicConsequenceFDR?: Maybe<Scalars['Float']>;
  phenotypicConsequenceLogFoldChange?: Maybe<Scalars['Float']>;
  phenotypicConsequencePValue?: Maybe<Scalars['Float']>;
  projectId?: Maybe<Scalars['String']>;
  publicationFirstAuthor?: Maybe<Scalars['String']>;
  publicationYear?: Maybe<Scalars['Long']>;
  reactionId?: Maybe<Scalars['String']>;
  reactionName?: Maybe<Scalars['String']>;
  resourceScore?: Maybe<Scalars['Float']>;
  score: Scalars['Float'];
  significantDriverMethods?: Maybe<Array<Scalars['String']>>;
  statisticalTestTail?: Maybe<Scalars['String']>;
  studyCases?: Maybe<Scalars['Long']>;
  studyId?: Maybe<Scalars['String']>;
  studyOverview?: Maybe<Scalars['String']>;
  studySampleSize?: Maybe<Scalars['Long']>;
  studyStartDate?: Maybe<Scalars['String']>;
  studyStopReason?: Maybe<Scalars['String']>;
  target: Target;
  targetFromSource?: Maybe<Scalars['String']>;
  targetFromSourceId?: Maybe<Scalars['String']>;
  targetInModel?: Maybe<Scalars['String']>;
  targetModulation?: Maybe<Scalars['String']>;
  textMiningSentences?: Maybe<Array<EvidenceTextMiningSentence>>;
  urls?: Maybe<Array<LabelledUri>>;
  variantAminoacidDescriptions?: Maybe<Array<Scalars['String']>>;
  variantFunctionalConsequence?: Maybe<SequenceOntologyTerm>;
  variantId?: Maybe<Scalars['String']>;
  variantRsId?: Maybe<Scalars['String']>;
};

export type EvidenceSource = {
  __typename?: 'EvidenceSource';
  datasource: Scalars['String'];
  datatype: Scalars['String'];
};

export type EvidenceTextMiningSentence = {
  __typename?: 'EvidenceTextMiningSentence';
  dEnd: Scalars['Long'];
  dStart: Scalars['Long'];
  section: Scalars['String'];
  tEnd: Scalars['Long'];
  tStart: Scalars['Long'];
  text: Scalars['String'];
};

export type EvidenceVariation = {
  __typename?: 'EvidenceVariation';
  functionalConsequence?: Maybe<SequenceOntologyTerm>;
  numberMutatedSamples?: Maybe<Scalars['Long']>;
  numberSamplesTested?: Maybe<Scalars['Long']>;
  numberSamplesWithMutationType?: Maybe<Scalars['Long']>;
};

export type Evidences = {
  __typename?: 'Evidences';
  count: Scalars['Long'];
  cursor?: Maybe<Scalars['String']>;
  rows: Array<Evidence>;
};

export type Expression = {
  __typename?: 'Expression';
  protein: ProteinExpression;
  rna: RnaExpression;
  tissue: Tissue;
};

export type GeneOntology = {
  __typename?: 'GeneOntology';
  aspect: Scalars['String'];
  evidence: Scalars['String'];
  geneProduct: Scalars['String'];
  source: Scalars['String'];
  term: GeneOntologyTerm;
};

export type GeneOntologyTerm = {
  __typename?: 'GeneOntologyTerm';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type GenomicLocation = {
  __typename?: 'GenomicLocation';
  chromosome: Scalars['String'];
  end: Scalars['Long'];
  start: Scalars['Long'];
  strand: Scalars['Int'];
};

export type Hpo = {
  __typename?: 'HPO';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  namespace?: Maybe<Array<Scalars['String']>>;
};

export type HallmarkAttribute = {
  __typename?: 'HallmarkAttribute';
  description: Scalars['String'];
  name: Scalars['String'];
  pmid?: Maybe<Scalars['Long']>;
};

export type Hallmarks = {
  __typename?: 'Hallmarks';
  attributes: Array<HallmarkAttribute>;
  cancerHallmarks: Array<CancerHallmark>;
};

export type Homologue = {
  __typename?: 'Homologue';
  homologyType: Scalars['String'];
  isHighConfidence?: Maybe<Scalars['String']>;
  queryPercentageIdentity: Scalars['Float'];
  speciesId: Scalars['String'];
  speciesName: Scalars['String'];
  targetGeneId: Scalars['String'];
  targetGeneSymbol: Scalars['String'];
  targetPercentageIdentity: Scalars['Float'];
};

export type IdAndSource = {
  __typename?: 'IdAndSource';
  id: Scalars['String'];
  source: Scalars['String'];
};

export type IndicationReference = {
  __typename?: 'IndicationReference';
  ids?: Maybe<Array<Scalars['String']>>;
  source: Scalars['String'];
};

export type IndicationRow = {
  __typename?: 'IndicationRow';
  disease: Disease;
  maxPhaseForIndication: Scalars['Long'];
  references?: Maybe<Array<IndicationReference>>;
};

export type Indications = {
  __typename?: 'Indications';
  approvedIndications?: Maybe<Array<Scalars['String']>>;
  count: Scalars['Long'];
  rows: Array<IndicationRow>;
};

export type Interaction = {
  __typename?: 'Interaction';
  count: Scalars['Long'];
  evidences: Array<InteractionEvidence>;
  intA: Scalars['String'];
  intABiologicalRole: Scalars['String'];
  intB: Scalars['String'];
  intBBiologicalRole: Scalars['String'];
  score?: Maybe<Scalars['Float']>;
  sourceDatabase: Scalars['String'];
  speciesA?: Maybe<InteractionSpecies>;
  speciesB?: Maybe<InteractionSpecies>;
  targetA?: Maybe<Target>;
  targetB?: Maybe<Target>;
};

export type InteractionEvidence = {
  __typename?: 'InteractionEvidence';
  evidenceScore?: Maybe<Scalars['Float']>;
  expansionMethodMiIdentifier?: Maybe<Scalars['String']>;
  expansionMethodShortName?: Maybe<Scalars['String']>;
  hostOrganismScientificName?: Maybe<Scalars['String']>;
  hostOrganismTaxId?: Maybe<Scalars['Long']>;
  intASource: Scalars['String'];
  intBSource: Scalars['String'];
  interactionDetectionMethodMiIdentifier: Scalars['String'];
  interactionDetectionMethodShortName: Scalars['String'];
  interactionIdentifier?: Maybe<Scalars['String']>;
  interactionTypeMiIdentifier?: Maybe<Scalars['String']>;
  interactionTypeShortName?: Maybe<Scalars['String']>;
  participantDetectionMethodA?: Maybe<Array<InteractionEvidencePdm>>;
  participantDetectionMethodB?: Maybe<Array<InteractionEvidencePdm>>;
  pubmedId?: Maybe<Scalars['String']>;
};

export type InteractionEvidencePdm = {
  __typename?: 'InteractionEvidencePDM';
  miIdentifier?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
};

export type InteractionResources = {
  __typename?: 'InteractionResources';
  databaseVersion: Scalars['String'];
  sourceDatabase: Scalars['String'];
};

export type InteractionSpecies = {
  __typename?: 'InteractionSpecies';
  mnemonic?: Maybe<Scalars['String']>;
  scientificName?: Maybe<Scalars['String']>;
  taxonId?: Maybe<Scalars['Long']>;
};

export type Interactions = {
  __typename?: 'Interactions';
  count: Scalars['Long'];
  rows: Array<Interaction>;
};

export type KnownDrug = {
  __typename?: 'KnownDrug';
  approvedName: Scalars['String'];
  approvedSymbol: Scalars['String'];
  ctIds: Array<Scalars['String']>;
  disease?: Maybe<Disease>;
  diseaseId: Scalars['String'];
  drug?: Maybe<Drug>;
  drugId: Scalars['String'];
  drugType: Scalars['String'];
  label: Scalars['String'];
  mechanismOfAction: Scalars['String'];
  phase: Scalars['Int'];
  prefName: Scalars['String'];
  references: Array<KnownDrugReference>;
  status?: Maybe<Scalars['String']>;
  target?: Maybe<Target>;
  targetClass: Array<Scalars['String']>;
  targetId: Scalars['String'];
  urls: Array<Url>;
};

export type KnownDrugReference = {
  __typename?: 'KnownDrugReference';
  ids: Array<Scalars['String']>;
  source: Scalars['String'];
  urls: Array<Scalars['String']>;
};

export type KnownDrugs = {
  __typename?: 'KnownDrugs';
  count: Scalars['Long'];
  cursor?: Maybe<Scalars['String']>;
  rows: Array<KnownDrug>;
  uniqueDiseases: Scalars['Long'];
  uniqueDrugs: Scalars['Long'];
  uniqueTargets: Scalars['Long'];
};

export type LabelAndSource = {
  __typename?: 'LabelAndSource';
  label: Scalars['String'];
  source: Scalars['String'];
};

export type LabelledElement = {
  __typename?: 'LabelledElement';
  id: Scalars['String'];
  label: Scalars['String'];
};

export type LabelledUri = {
  __typename?: 'LabelledUri';
  niceName: Scalars['String'];
  url: Scalars['String'];
};

export type LinkedDiseases = {
  __typename?: 'LinkedDiseases';
  count: Scalars['Int'];
  rows: Array<Disease>;
};

export type LinkedTargets = {
  __typename?: 'LinkedTargets';
  count: Scalars['Int'];
  rows: Array<Target>;
};

export type LocationAndSource = {
  __typename?: 'LocationAndSource';
  labelSL?: Maybe<Scalars['String']>;
  location: Scalars['String'];
  source: Scalars['String'];
  termSL?: Maybe<Scalars['String']>;
};

export type Match = {
  __typename?: 'Match';
  endInSentence: Scalars['Long'];
  mappedId: Scalars['String'];
  matchedLabel: Scalars['String'];
  matchedType: Scalars['String'];
  sectionEnd?: Maybe<Scalars['Long']>;
  sectionStart?: Maybe<Scalars['Long']>;
  startInSentence: Scalars['Long'];
};

export type MechanismOfActionRow = {
  __typename?: 'MechanismOfActionRow';
  actionType?: Maybe<Scalars['String']>;
  mechanismOfAction: Scalars['String'];
  references?: Maybe<Array<Reference>>;
  targetName?: Maybe<Scalars['String']>;
  targets: Array<Target>;
};

export type MechanismsOfAction = {
  __typename?: 'MechanismsOfAction';
  rows: Array<MechanismOfActionRow>;
  uniqueActionTypes: Array<Scalars['String']>;
  uniqueTargetTypes: Array<Scalars['String']>;
};

export type Meta = {
  __typename?: 'Meta';
  apiVersion: ApiVersion;
  dataVersion: DataVersion;
  name: Scalars['String'];
};

export type ModelPhenotypeClasses = {
  __typename?: 'ModelPhenotypeClasses';
  id: Scalars['String'];
  label: Scalars['String'];
};

export type MousePhenotype = {
  __typename?: 'MousePhenotype';
  biologicalModels: Array<BiologicalModels>;
  modelPhenotypeClasses: Array<ModelPhenotypeClasses>;
  modelPhenotypeId: Scalars['String'];
  modelPhenotypeLabel: Scalars['String'];
  targetInModel: Scalars['String'];
  targetInModelEnsemblId?: Maybe<Scalars['String']>;
  targetInModelMgiId: Scalars['String'];
};

export type NamedAggregation = {
  __typename?: 'NamedAggregation';
  name: Scalars['String'];
  rows: Array<Aggregation>;
  uniques?: Maybe<Scalars['Long']>;
};

export type OtarProject = {
  __typename?: 'OtarProject';
  otarCode: Scalars['String'];
  projectName: Scalars['String'];
  reference: Scalars['String'];
  status: Scalars['String'];
};

export type Pagination = {
  index: Scalars['Int'];
  size: Scalars['Int'];
};

export type Pathway = {
  __typename?: 'Pathway';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type ProteinExpression = {
  __typename?: 'ProteinExpression';
  cellType: Array<CellType>;
  level: Scalars['Int'];
  reliability: Scalars['Boolean'];
};

export type Publication = {
  __typename?: 'Publication';
  pmcid?: Maybe<Scalars['String']>;
  pmid: Scalars['String'];
  publicationDate?: Maybe<Scalars['String']>;
  sentences?: Maybe<Array<Sentence>>;
};

export type Publications = {
  __typename?: 'Publications';
  count: Scalars['Long'];
  cursor?: Maybe<Scalars['String']>;
  rows: Array<Publication>;
};

export type Query = {
  __typename?: 'Query';
  associationDatasources: Array<EvidenceSource>;
  disease?: Maybe<Disease>;
  diseases: Array<Disease>;
  drug?: Maybe<Drug>;
  drugs: Array<Drug>;
  geneOntologyTerms: Array<Maybe<GeneOntologyTerm>>;
  interactionResources: Array<InteractionResources>;
  meta: Meta;
  search: SearchResults;
  target?: Maybe<Target>;
  targets: Array<Target>;
};


export type QueryDiseaseArgs = {
  efoId: Scalars['String'];
};


export type QueryDiseasesArgs = {
  efoIds: Array<Scalars['String']>;
};


export type QueryDrugArgs = {
  chemblId: Scalars['String'];
};


export type QueryDrugsArgs = {
  chemblIds: Array<Scalars['String']>;
};


export type QueryGeneOntologyTermsArgs = {
  goIds: Array<Scalars['String']>;
};


export type QuerySearchArgs = {
  entityNames?: InputMaybe<Array<Scalars['String']>>;
  page?: InputMaybe<Pagination>;
  queryString: Scalars['String'];
};


export type QueryTargetArgs = {
  ensemblId: Scalars['String'];
};


export type QueryTargetsArgs = {
  ensemblIds: Array<Scalars['String']>;
};

export type RnaExpression = {
  __typename?: 'RNAExpression';
  level: Scalars['Int'];
  unit: Scalars['String'];
  value: Scalars['Float'];
  zscore: Scalars['Long'];
};

export type ReactomePathway = {
  __typename?: 'ReactomePathway';
  pathway: Scalars['String'];
  pathwayId: Scalars['String'];
  topLevelTerm: Scalars['String'];
};

export type Reference = {
  __typename?: 'Reference';
  ids?: Maybe<Array<Scalars['String']>>;
  source: Scalars['String'];
  urls?: Maybe<Array<Scalars['String']>>;
};

export type SafetyBiosample = {
  __typename?: 'SafetyBiosample';
  cellFormat?: Maybe<Scalars['String']>;
  cellId?: Maybe<Scalars['String']>;
  cellLabel?: Maybe<Scalars['String']>;
  tissueId?: Maybe<Scalars['String']>;
  tissueLabel?: Maybe<Scalars['String']>;
};

export type SafetyEffects = {
  __typename?: 'SafetyEffects';
  direction: Scalars['String'];
  dosing?: Maybe<Scalars['String']>;
};

export type SafetyLiability = {
  __typename?: 'SafetyLiability';
  biosample?: Maybe<Array<SafetyBiosample>>;
  datasource: Scalars['String'];
  effects?: Maybe<Array<SafetyEffects>>;
  event?: Maybe<Scalars['String']>;
  eventId?: Maybe<Scalars['String']>;
  literature?: Maybe<Scalars['String']>;
  study?: Maybe<Array<SafetyStudy>>;
  url?: Maybe<Scalars['String']>;
};

export type SafetyStudy = {
  __typename?: 'SafetyStudy';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ScoredComponent = {
  __typename?: 'ScoredComponent';
  id: Scalars['String'];
  score: Scalars['Float'];
};

export type SearchResult = {
  __typename?: 'SearchResult';
  category: Array<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  entity: Scalars['String'];
  highlights: Array<Scalars['String']>;
  id: Scalars['String'];
  keywords?: Maybe<Array<Scalars['String']>>;
  multiplier: Scalars['Float'];
  name: Scalars['String'];
  ngrams?: Maybe<Array<Scalars['String']>>;
  object?: Maybe<EntityUnionType>;
  prefixes?: Maybe<Array<Scalars['String']>>;
  score: Scalars['Float'];
};

export type SearchResultAggCategory = {
  __typename?: 'SearchResultAggCategory';
  name: Scalars['String'];
  total: Scalars['Long'];
};

export type SearchResultAggEntity = {
  __typename?: 'SearchResultAggEntity';
  categories: Array<SearchResultAggCategory>;
  name: Scalars['String'];
  total: Scalars['Long'];
};

export type SearchResultAggs = {
  __typename?: 'SearchResultAggs';
  entities: Array<SearchResultAggEntity>;
  total: Scalars['Long'];
};

export type SearchResults = {
  __typename?: 'SearchResults';
  aggregations?: Maybe<SearchResultAggs>;
  hits: Array<SearchResult>;
  total: Scalars['Long'];
};

export type Sentence = {
  __typename?: 'Sentence';
  matches: Array<Match>;
  section: Scalars['String'];
};

export type SequenceOntologyTerm = {
  __typename?: 'SequenceOntologyTerm';
  id: Scalars['String'];
  label: Scalars['String'];
};

export type Similarity = {
  __typename?: 'Similarity';
  category: Scalars['String'];
  id: Scalars['String'];
  object?: Maybe<EntityUnionType>;
  score: Scalars['Float'];
};

export type Target = {
  __typename?: 'Target';
  alternativeGenes: Array<Scalars['String']>;
  approvedName: Scalars['String'];
  approvedSymbol: Scalars['String'];
  associatedDiseases: AssociatedDiseases;
  biotype: Scalars['String'];
  chemicalProbes: Array<ChemicalProbe>;
  dbXrefs: Array<IdAndSource>;
  evidences: Evidences;
  expressions: Array<Expression>;
  functionDescriptions: Array<Scalars['String']>;
  geneOntology: Array<GeneOntology>;
  geneticConstraint: Array<Constraint>;
  genomicLocation: GenomicLocation;
  hallmarks?: Maybe<Hallmarks>;
  homologues: Array<Homologue>;
  id: Scalars['String'];
  interactions?: Maybe<Interactions>;
  knownDrugs?: Maybe<KnownDrugs>;
  literatureOcurrences: Publications;
  mousePhenotypes: Array<MousePhenotype>;
  nameSynonyms: Array<LabelAndSource>;
  obsoleteNames: Array<LabelAndSource>;
  obsoleteSymbols: Array<LabelAndSource>;
  pathways: Array<ReactomePathway>;
  proteinIds: Array<IdAndSource>;
  safetyLiabilities: Array<SafetyLiability>;
  similarEntities: Array<Similarity>;
  subcellularLocations: Array<LocationAndSource>;
  symbolSynonyms: Array<LabelAndSource>;
  synonyms: Array<LabelAndSource>;
  targetClass: Array<TargetClass>;
  tep?: Maybe<Tep>;
  tractability: Array<Tractability>;
  transcriptIds: Array<Scalars['String']>;
};


export type TargetAssociatedDiseasesArgs = {
  BFilter?: InputMaybe<Scalars['String']>;
  Bs?: InputMaybe<Array<Scalars['String']>>;
  aggregationFilters?: InputMaybe<Array<AggregationFilter>>;
  datasources?: InputMaybe<Array<DatasourceSettingsInput>>;
  enableIndirect?: InputMaybe<Scalars['Boolean']>;
  orderByScore?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Pagination>;
};


export type TargetEvidencesArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  datasourceIds?: InputMaybe<Array<Scalars['String']>>;
  efoIds: Array<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type TargetInteractionsArgs = {
  page?: InputMaybe<Pagination>;
  sourceDatabase?: InputMaybe<Scalars['String']>;
};


export type TargetKnownDrugsArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  freeTextQuery?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
};


export type TargetLiteratureOcurrencesArgs = {
  additionalIds?: InputMaybe<Array<Scalars['String']>>;
  cursor?: InputMaybe<Scalars['String']>;
};


export type TargetSimilarEntitiesArgs = {
  additionalIds?: InputMaybe<Array<Scalars['String']>>;
  entityNames?: InputMaybe<Array<Scalars['String']>>;
  size?: InputMaybe<Scalars['Int']>;
  threshold?: InputMaybe<Scalars['Float']>;
};

export type TargetClass = {
  __typename?: 'TargetClass';
  id: Scalars['Long'];
  label: Scalars['String'];
  level: Scalars['String'];
};

export type Tep = {
  __typename?: 'Tep';
  description: Scalars['String'];
  name: Scalars['String'];
  therapeuticArea: Scalars['String'];
  uri: Scalars['String'];
};

export type Tissue = {
  __typename?: 'Tissue';
  anatomicalSystems: Array<Scalars['String']>;
  id: Scalars['String'];
  label: Scalars['String'];
  organs: Array<Scalars['String']>;
};

export type Tractability = {
  __typename?: 'Tractability';
  id: Scalars['String'];
  modality: Scalars['String'];
  value: Scalars['Boolean'];
};

export type Url = {
  __typename?: 'URL';
  name: Scalars['String'];
  url: Scalars['String'];
};

export type Biomarkers = {
  __typename?: 'biomarkers';
  geneExpression?: Maybe<Array<GeneExpression>>;
  variant?: Maybe<Array<Variant>>;
};

export type GeneExpression = {
  __typename?: 'geneExpression';
  id?: Maybe<GeneOntologyTerm>;
  name?: Maybe<Scalars['String']>;
};

export type Variant = {
  __typename?: 'variant';
  functionalConsequenceId?: Maybe<SequenceOntologyTerm>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type DiseaseQueryVariables = Exact<{
  efoId: Scalars['String'];
  page?: InputMaybe<Pagination>;
}>;


export type DiseaseQuery = { __typename?: 'Query', disease?: { __typename?: 'Disease', id: string, name: string, description?: string | null, associatedTargets: { __typename?: 'AssociatedTargets', rows: Array<{ __typename?: 'AssociatedTarget', score: number, target: { __typename?: 'Target', id: string, approvedName: string, approvedSymbol: string }, datatypeScores: Array<{ __typename?: 'ScoredComponent', id: string, score: number }> }> } } | null };


export const DiseaseDocument = gql`
    query disease($efoId: String!, $page: Pagination) {
  disease(efoId: $efoId) {
    id
    name
    description
    associatedTargets(page: $page) {
      rows {
        target {
          id
          approvedName
          approvedSymbol
        }
        score
        datatypeScores {
          id
          score
        }
      }
    }
  }
}
    `;

/**
 * __useDiseaseQuery__
 *
 * To run a query within a React component, call `useDiseaseQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiseaseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDiseaseQuery({
 *   variables: {
 *      efoId: // value for 'efoId'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useDiseaseQuery(baseOptions: Apollo.QueryHookOptions<DiseaseQuery, DiseaseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DiseaseQuery, DiseaseQueryVariables>(DiseaseDocument, options);
      }
export function useDiseaseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DiseaseQuery, DiseaseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DiseaseQuery, DiseaseQueryVariables>(DiseaseDocument, options);
        }
export type DiseaseQueryHookResult = ReturnType<typeof useDiseaseQuery>;
export type DiseaseLazyQueryHookResult = ReturnType<typeof useDiseaseLazyQuery>;
export type DiseaseQueryResult = Apollo.QueryResult<DiseaseQuery, DiseaseQueryVariables>;