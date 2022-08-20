export namespace main {
	
	export class task {
	    title: string;
	    description: string;
	
	    static createFrom(source: any = {}) {
	        return new task(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.title = source["title"];
	        this.description = source["description"];
	    }
	}

}

