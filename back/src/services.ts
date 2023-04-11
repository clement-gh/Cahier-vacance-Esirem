export class ServiceBack {
    private static instance: ServiceBack;
    private _coursPre: string;
    private _quizzPre: string;
    private _exoLongPre: string;
    private _anneePre: string;
    private _matierePre: string;
    private _rubriquePre: string;
    private _correctionPre: string;
    private _port: number;

    private constructor() {
        this._coursPre = '/cours';
        this._quizzPre = '/quizz';
        this._exoLongPre = '/exoL';
        this._anneePre = '/annee';
        this._matierePre = '/matiere';
        this._rubriquePre = '/rubrique';
        this._correctionPre = '/correction';
        this._port = 4000;
    }

    public static getInstance(): ServiceBack {
        if (!ServiceBack.instance) {
            ServiceBack.instance = new ServiceBack();
        }

        return ServiceBack.instance;
    }
    public coursPre(): string {
        return this._coursPre;
    }
    public quizzPre(): string {
        return this._quizzPre;
    }
    public exoLongPre(): string {
        return this._exoLongPre;
    }
    public anneePre(): string {
        return this._anneePre;
    }
    public matierePre(): string {
        return this._matierePre;
    }
    public rubriquePre(): string {
        return this._rubriquePre;
    }
    public correctionPre(): string {
        return this._correctionPre;
    }
    public port(): number {
        return this._port;
    }
}