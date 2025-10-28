// CMS (Strapi) client for content management

const CMS_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || process.env.STRAPI_API_URL || "https://orderly-rhythm-491ff3f123.strapiapp.com";

export interface CMSContent {
  id: number;
  attributes: any;
}

export interface CMSResponse<T> {
  data: T[];
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

class CMSClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = CMS_URL;
  }

  /**
   * Generic API call to Strapi
   */
  private async fetchAPI<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}/api${endpoint}`;

    const defaultOptions: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    };

    const response = await fetch(url, {
      ...defaultOptions,
      ...options,
    });

    if (!response.ok) {
      throw new Error(`CMS API error: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Get content by type
   */
  async getContent(contentType: string, filters?: any): Promise<any[]> {
    const query = new URLSearchParams();

    if (filters) {
      Object.keys(filters).forEach((key) => {
        query.append(`filters[${key}]`, filters[key]);
      });
    }

    const endpoint = query.toString()
      ? `/${contentType}?${query.toString()}`
      : `/${contentType}`;

    const response: CMSResponse<any> = await this.fetchAPI(endpoint);
    return response.data || [];
  }

  /**
   * Get single content item
   */
  async getContentItem(contentType: string, id: number): Promise<any> {
    const response: CMSResponse<any> = await this.fetchAPI(
      `/${contentType}/${id}`
    );
    return response.data?.[0] || null;
  }

  /**
   * Create content
   */
  async createContent(contentType: string, data: any): Promise<any> {
    const response = await this.fetchAPI(`/${contentType}`, {
      method: "POST",
      body: JSON.stringify({ data }),
    });
    return response;
  }

  /**
   * Update content
   */
  async updateContent(
    contentType: string,
    id: number,
    data: any
  ): Promise<any> {
    const response = await this.fetchAPI(`/${contentType}/${id}`, {
      method: "PUT",
      body: JSON.stringify({ data }),
    });
    return response;
  }

  /**
   * Delete content
   */
  async deleteContent(contentType: string, id: number): Promise<void> {
    await this.fetchAPI(`/${contentType}/${id}`, {
      method: "DELETE",
    });
  }

  /**
   * Get IR News
   */
  async getIRNews(companyId?: number) {
    const filters = companyId ? { company: companyId } : {};
    return this.getContent("ir-news", filters);
  }

  /**
   * Get SEC Filings
   */
  async getSECFilings(companyId?: number) {
    const filters = companyId ? { company: companyId } : {};
    return this.getContent("sec-filings", filters);
  }

  /**
   * Get Presentations
   */
  async getPresentations(companyId?: number) {
    const filters = companyId ? { company: companyId } : {};
    return this.getContent("presentations", filters);
  }

  /**
   * Get Leadership
   */
  async getLeadership(companyId?: number) {
    const filters = companyId ? { company: companyId } : {};
    return this.getContent("leadership", filters);
  }

  /**
   * Get FAQs
   */
  async getFAQs(companyId?: number) {
    const filters = companyId ? { company: companyId } : {};
    return this.getContent("faqs", filters);
  }

  /**
   * Get Investor Events
   */
  async getInvestorEvents(companyId?: number) {
    const filters = companyId ? { company: companyId } : {};
    return this.getContent("investor-events", filters);
  }

  /**
   * Get Company info
   */
  async getCompany(companyId: number) {
    return this.getContentItem("company", companyId);
  }
}

export const cmsClient = new CMSClient();
