import { paleontSiteModel } from './paleontSiteModel';
import { CollectorModel } from './collectorModel';
import { CollectionModel } from './collectionModel';
export class PieceModel {
    _id: string;
    namePiece: string;
    numberPiece: string;
    partitionPiece: string;
    importancePiece: string;
    outcropPiece: string;
    physicalLocPiece: string;
    collectionDate: Date;
    collectionPiece: CollectionModel;
    subCollectionPiece: CollectionModel;
    paleontSitePiece: paleontSiteModel;
    descriptionPiece: string;
    imagePiece: string;
    collectorPiece: CollectorModel;
    statusPiece: string;
}
