function search_s_s(search,outp){
     search=search.toUpperCase();
    var  filename='no',discription='';


if (search=='AB')
{
    filename='ab_ad.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AB, AD';
}
if (search=='AD')
{
    filename='ab_ad.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AB, AD';
}
if (search=='AE')
{
    filename='ae.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AE';
}
if (search=='AF')
{
    filename='af.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AF';
}
if (search=='AG')
{
    filename='ag.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AG';
}
if (search=='AH')
{
    filename='ah.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AH';
}

if (search=='AL')
{
    filename='ak_al_am_ap.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AL, AM, AP';
}
if (search=='AM')
{
    filename='ak_al_am_ap.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AL, AM, AP';
}
if (search=='AP')
{
    filename='ak_al_am_ap.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AL, AM, AP';
}
if (search=='AK')
{
    filename='ak_al_am_ap.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AL, AM, AP';
}
if (search=='AR')
{
    filename='ar.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AR';
}
//if (search=='AS')
//{
 //   filename='as.png';
 //   discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AS';
//}
if (search=='AX')
{
    filename='ax_az.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AX, AZ';
}
if (search=='AZ')
{
    filename='ax_az.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AX, AZ';
}
if (search=='BA')
{
    filename='ba.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BA';
}
if (search=='BE')
{
    filename='be_bl.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BE, BL';
}
if (search=='BL')
{
    filename='be_bl.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BE, BL';
}
if (search=='BM')
{
    filename='bm_bo.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BM, BN, BO, BP';
}
if (search=='BO')
{
    filename='bm_bo.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BM, BN, BO, BP';
}
/*if (search=='BN')
{
    filename='bm_bn_bo_bp.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BM, BN, BO, BP';
}
*/
if (search=='BP')
{
    filename='bp.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BM, BN, BO, BP';
}
if (search=='BR')
{
    filename='br.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BR, BX, CA';
}
if (search=='BX')
{
    filename='bx_ca.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BR, BX, CA';
}
if (search=='CA')
{
    filename='bx_ca.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BR, BX, CA';
}
if (search=='CB')
{
    filename='cb.png';//
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: CB, CL, CN';
}
if (search=='CL')
{
    filename='cl_cn_co_cp.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: CB, CL, CN';
}
if (search=='CN')
{
    filename='cl_cn_co_cp.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: CB, CL, CN';
}
if (search=='CO')
{
    filename='cl_cn_co_cp.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: CO, CP, CV';
}
if (search=='CP')
{
    filename='cl_cn_co_cp.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: CO, CP, CV';
}
if (search=='CV')
{
    filename='cv.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: CO, CP, CV';
}
if (search=='CY')
{
    filename='cx_cy_da.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: CY, CX, DA, DB, DE, DF';
}
if (search=='CX')
{
    filename='cx_cy_da.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: CY, CX, DA, DB, DE, DF';
}
if (search=='DA')
{
    filename='cx_cy_da.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: CY, CX, DA, DB, DE, DF';
}
if (search=='DB')
{
    filename='db.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: CY, CX, DA, DB, DE, DF';
}
if (search=='DE')
{
    filename='de_df_dg_dh_dl.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: CY, CX, DA, DB, DE, DF';
}
if (search=='DF')
{
    filename='de_df_dg_dh_dl.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: CY, CX, DA, DB, DE, DF';
}
if (search=='DG')
{
    filename='de_df_dg_dh_dl.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: DG, DH, DL, DM, DX, EA, EB';
}
if (search=='DH')
{
    filename='de_df_dg_dh_dl.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: DG, DH, DL, DM, DX, EA, EB';
}
if (search=='DL')
{
    filename='de_df_dg_dh_dl.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: DG, DH, DL, DM, DX, EA, EB';
}
if (search=='DM')
{
    filename='dm_dx_ea_eb_ed_ef_ek_el.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: DG, DH, DL, DM, DX, EA, EB';
}
if (search=='DX')
{
    filename='dm_dx_ea_eb_ed_ef_ek_el.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: DG, DH, DL, DM, DX, EA, EB';
}
if (search=='EA')
{
    filename='dm_dx_ea_eb_ed_ef_ek_el.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: DG, DH, DL, DM, DX, EA, EB';
}
if (search=='EB')
{
    filename='dm_dx_ea_eb_ed_ef_ek_el.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: DG, DH, DL, DM, DX, EA, EB';
}
if (search=='ED')
{
    filename='dm_dx_ea_eb_ed_ef_ek_el.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: ED, EF, EK, EL, EM, EN, EO, ES, ET, EU, EX';
}
if (search=='EF')
{
    filename='dm_dx_ea_eb_ed_ef_ek_el.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: ED, EF, EK, EL, EM, EN, EO, ES, ET, EU, EX';
}
if (search=='EK')
{
    filename='dm_dx_ea_eb_ed_ef_ek_el.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: ED, EF, EK, EL, EM, EN, EO, ES, ET, EU, EX';
}
if (search=='EL')
{
    filename='dm_dx_ea_eb_ed_ef_ek_el.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: ED, EF, EK, EL, EM, EN, EO, ES, ET, EU, EX';
}
if (search=='EM')
{
    filename='em_en_eo_er_es_et_eu_ex_fa_fe.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: ED, EF, EK, EL, EM, EN, EO, ES, ET, EU, EX';
}
if (search=='EN')
{
    filename='em_en_eo_er_es_et_eu_ex_fa_fe.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: ED, EF, EK, EL, EM, EN, EO, ES, ET, EU, EX';
}
if (search=='EO')
{
    filename='em_en_eo_er_es_et_eu_ex_fa_fe.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: ED, EF, EK, EL, EM, EN, EO, ES, ET, EU, EX';
}
 if (search=='ER')
{
    filename='em_en_eo_er_es_et_eu_ex_fa_fe.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: ED, EF, EK, EL, EM, EN, EO, ES, ET, EU, EX';
}
if (search=='ES')
{
    filename='em_en_eo_er_es_et_eu_ex_fa_fe.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: ED, EF, EK, EL, EM, EN, EO, ES, ET, EU, EX';
}
if (search=='ET')
{
    filename='em_en_eo_er_es_et_eu_ex_fa_fe.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: ED, EF, EK, EL, EM, EN, EO, ES, ET, EU, EX';
}
if (search=='EU')
{
    filename='em_en_eo_er_es_et_eu_ex_fa_fe.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: ED, EF, EK, EL, EM, EN, EO, ES, ET, EU, EX';
}
if (search=='EX')
{
    filename='em_en_eo_er_es_et_eu_ex_fa_fe.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: ED, EF, EK, EL, EM, EN, EO, ES, ET, EU, EX';
}
if (search=='FA')
{
    filename='em_en_eo_er_es_et_eu_ex_fa_fe.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: FA, FE, FK, FL, FM, FQ';
}
if (search=='FE')
{
    filename='em_en_eo_er_es_et_eu_ex_fa_fe.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: FA, FE, FK, FL, FM, FQ';
}
if (search=='FK')
{
    filename='fk.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: FA, FE, FK, FL, FM, FQ';
}
if (search=='FL')
{
    filename='fl_fm_fq_ga_gb.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: FA, FE, FK, FL, FM, FQ';
}
if (search=='FM')
{
    filename='fl_fm_fq_ga_gb.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: FA, FE, FK, FL, FM, FQ';
}
if (search=='FQ')
{
    filename='fl_fm_fq_ga_gb.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: FA, FE, FK, FL, FM, FQ';
}
if (search=='GA')
{
    filename='fl_fm_fq_ga_gb.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: GA, GB, GE, GX, HA, HE, HS, IA, IB, IC, ID';
}
if (search=='GB')
{
    filename='fl_fm_fq_ga_gb.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: GA, GB, GE, GX, HA, HE, HS, IA, IB, IC, ID';
}
if (search=='GE')
{
    filename='ge_gl_gx_ha_he_hs.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: GA, GB, GE, GX, HA, HE, HS, IA, IB, IC, ID';
}
if (search=='GL')
{
    filename='ge_gl_gx_ha_he_hs.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: GA, GB, GE, GX, HA, HE, HS, IA, IB, IC, ID';
}
if (search=='GX')
{
    filename='ge_gl_gx_ha_he_hs.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: GA, GB, GE, GX, HA, HE, HS, IA, IB, IC, ID';
}
if (search=='HA')
{
    filename='ge_gl_gx_ha_he_hs.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: GA, GB, GE, GX, HA, HE, HS, IA, IB, IC, ID';
}
if (search=='HE')
{
    filename='ge_gl_gx_ha_he_hs.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: GA, GB, GE, GX, HA, HE, HS, IA, IB, IC, ID';
}
if (search=='HS')
{
    filename='ge_gl_gx_ha_he_hs.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: GA, GB, GE, GX, HA, HE, HS, IA, IB, IC, ID';
}
if (search=='IA')
{
    filename='ia_ib_ic_id_iq_ir_is_it_ix_ma_mb_mc.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: GA, GB, GE, GX, HA, HE, HS, IA, IB, IC, ID';
}
if (search=='IB')
{
    filename='ia_ib_ic_id_iq_ir_is_it_ix_ma_mb_mc.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: GA, GB, GE, GX, HA, HE, HS, IA, IB, IC, ID';
}
if (search=='IC')
{
    filename='ia_ib_ic_id_iq_ir_is_it_ix_ma_mb_mc.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: GA, GB, GE, GX, HA, HE, HS, IA, IB, IC, ID';
}
if (search=='ID')
{
    filename='ia_ib_ic_id_iq_ir_is_it_ix_ma_mb_mc.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: GA, GB, GE, GX, HA, HE, HS, IA, IB, IC, ID';
}
/*if (search=='HX')
{
    filename='hx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: HX';
} */
if (search=='IQ')
{
    filename='ia_ib_ic_id_iq_ir_is_it_ix_ma_mb_mc.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: IQ, IR, IS, IT, IX, MA, MB, MC';
}
if (search=='IR')
{
    filename='ia_ib_ic_id_iq_ir_is_it_ix_ma_mb_mc.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: IQ, IR, IS, IT, IX, MA, MB, MC';
}
if (search=='IS')
{
    filename='ia_ib_ic_id_iq_ir_is_it_ix_ma_mb_mc.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: IQ, IR, IS, IT, IX, MA, MB, MC';
}
if (search=='IT')
{
    filename='ia_ib_ic_id_iq_ir_is_it_ix_ma_mb_mc.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: IQ, IR, IS, IT, IX, MA, MB, MC';
}
if (search=='IX')
{
    filename='ia_ib_ic_id_iq_ir_is_it_ix_ma_mb_mc.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: IQ, IR, IS, IT, IX, MA, MB, MC';
}
if (search=='MA')
{
    filename='ia_ib_ic_id_iq_ir_is_it_ix_ma_mb_mc.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: IQ, IR, IS, IT, IX, MA, MB, MC';
}
if (search=='MB')
{
    filename='ia_ib_ic_id_iq_ir_is_it_ix_ma_mb_mc.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: IQ, IR, IS, IT, IX, MA, MB, MC';
}
if (search=='MC')
{
    filename='ia_ib_ic_id_iq_ir_is_it_ix_ma_mb_mc.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: IQ, IR, IS, IT, IX, MA, MB, MC';
}
if (search=='MD')
{
    filename='md_me_mg_ml_mn_mt_mw_my.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MD, ME, MG, ML, MN, MT, MW, MY';
}
if (search=='ME')
{
    filename='md_me_mg_ml_mn_mt_mw_my.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MD, ME, MG, ML, MN, MT, MW, MY';
}
if (search=='MG')
{
    filename='md_me_mg_ml_mn_mt_mw_my.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MD, ME, MG, ML, MN, MT, MW, MY';
}
if (search=='ML')
{
    filename='md_me_mg_ml_mn_mt_mw_my.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MD, ME, MG, ML, MN, MT, MW, MY';
}
if (search=='MN')
{
    filename='md_me_mg_ml_mn_mt_mw_my.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MD, ME, MG, ML, MN, MT, MW, MY';
}
if (search=='MT')
{
    filename='md_me_mg_ml_mn_mt_mw_my.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MD, ME, MG, ML, MN, MT, MW, MY';
}
if (search=='MW')
{
    filename='md_me_mg_ml_mn_mt_mw_my.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MD, ME, MG, ML, MN, MT, MW, MY';
}
if (search=='MY')
{
    filename='md_me_mg_ml_mn_mt_mw_my.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MD, ME, MG, ML, MN, MT, MW, MY';
}
if (search=='ND')
{
    filename='nd_ne.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: NG, NM, NP, NT, NW, PA, PH, PK, PL, PM, PO, PS';
}
if (search=='NE')
{
    filename='nd_ne.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: NE';
}
if (search=='NG')
{
    filename='ng_np_nt_nw_nx_pa_ph_pk_pl_pm_po.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: NG, NM, NP, NT, NW, PA, PH, PK, PL, PM, PO, PS';
}

/*if (search=='NM')
{
    filename='ng_np_nt_nw_nx_pa_ph_pk_pl_pm_po.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: NG, NM, NP, NT, NW, PA, PH, PK, PL, PM, PO, PS';
}*/
if (search=='NP')
{
    filename='ng_np_nt_nw_nx_pa_ph_pk_pl_pm_po.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: NG, NM, NP, NT, NW, PA, PH, PK, PL, PM, PO, PS';
}
if (search=='NT')
{
    filename='ng_np_nt_nw_nx_pa_ph_pk_pl_pm_po.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: NG, NM, NP, NT, NW, PA, PH, PK, PL, PM, PO, PS';
}
if (search=='NW')
{
    filename='ng_np_nt_nw_nx_pa_ph_pk_pl_pm_po.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: NG, NM, NP, NT, NW, PA, PH, PK, PL, PM, PO, PS';
}
if (search=='NX')
{
    filename='ng_np_nt_nw_nx_pa_ph_pk_pl_pm_po.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: NG, NM, NP, NT, NW, PA, PH, PK, PL, PM, PO, PS';
}
if (search=='PA')
{
    filename='ng_np_nt_nw_nx_pa_ph_pk_pl_pm_po.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: NG, NM, NP, NT, NW, PA, PH, PK, PL, PM, PO, PS';
}
if (search=='PH')
{
    filename='ng_np_nt_nw_nx_pa_ph_pk_pl_pm_po.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: NG, NM, NP, NT, NW, PA, PH, PK, PL, PM, PO, PS';
}
if (search=='PK')
{
    filename='ng_np_nt_nw_nx_pa_ph_pk_pl_pm_po.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: NG, NM, NP, NT, NW, PA, PH, PK, PL, PM, PO, PS';
}
if (search=='PL')
{
    filename='ng_np_nt_nw_nx_pa_ph_pk_pl_pm_po.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: NG, NM, NP, NT, NW, PA, PH, PK, PL, PM, PO, PS';
}
if (search=='PM')
{
    filename='ng_np_nt_nw_nx_pa_ph_pk_pl_pm_po.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: NG, NM, NP, NT, NW, PA, PH, PK, PL, PM, PO, PS';
}
if (search=='PO')
{
    filename='ng_np_nt_nw_nx_pa_ph_pk_pl_pm_po.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: NG, NM, NP, NT, NW, PA, PH, PK, PL, PM, PO, PS';
}
if (search=='PS')
{
    filename='ps_pv_pw.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: NG, NM, NP, NT, NW, PA, PH, PK, PL, PM, PO, PS';
}
if (search=='PV')
{
    filename='ps_pv_pw.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: PV, PW, RA, RL, RS';
}
if (search=='PW')
{
    filename='ps_pv_pw.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: PV, PW, RA, RL, RS';
}
/*if (search=='RA')
{
    filename='pv_pw_ra_rl_rs.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: PV, PW, RA, RL, RS';
} 
if (search=='RL')
{
    filename='pv_pw_ra_rl_rs.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: PV, PW, RA, RL, RS';
}
if (search=='RS')
{
    filename='pv_pw_ra_rl_rs.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: PV, PW, RA, RL, RS';
}*/

if (search=='UA')
{
    filename='ua_ue_un_ut.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: UA, UE, UN, UT';
}
if (search=='UE')
{
    filename='ua_ue_un_ut.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: UA, UE, UN, UT';
}
if (search=='UN')
{
    filename='ua_ue_un_ut.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: UA, UE, UN, UT';
}
if (search=='UT')
{
    filename='ua_ue_un_ut.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: UA, UE, UN, UT';
}
if (search=='UX')
{
    filename='ux.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: UX';
}
if (search=='VA')
{
    filename='va_vb_vc_ve.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: VA, VB, VC, VD, VE';
}
if (search=='VB')
{
    filename='va_vb_vc_ve.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: VA, VB, VC, VD, VE';
}
if (search=='VC')
{
    filename='va_vb_vc_ve.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: VA, VB, VC, VD, VE';
}
/*if (search=='VD')
{
    filename='va_vb_vc_vd_ve.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: VA, VB, VC, VD, VE';
}*/
if (search=='VE')
{
    filename='va_vb_vc_ve.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: VA, VB, VC, VD, VE';
}
if (search=='VL')
{
    filename='vl_vx_wa_wb_we_wh_wk_wl_wo_wp.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: VL';
}
if (search=='VX')
{
    filename='vl_vx_wa_wb_we_wh_wk_wl_wo_wp.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: VX, WA, WB, WE, WH, WK, WO, WP';
}
if (search=='WA')
{
    filename='vl_vx_wa_wb_we_wh_wk_wl_wo_wp.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: VX, WA, WB, WE, WH, WK, WO, WP';
}
if (search=='WB')
{
    filename='vl_vx_wa_wb_we_wh_wk_wl_wo_wp.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: VX, WA, WB, WE, WH, WK, WO, WP';
}
if (search=='WE')
{
    filename='vl_vx_wa_wb_we_wh_wk_wl_wo_wp.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: VX, WA, WB, WE, WH, WK, WO, WP';
}
if (search=='WH')
{
    filename='vl_vx_wa_wb_we_wh_wk_wl_wo_wp.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: VX, WA, WB, WE, WH, WK, WO, WP';
}
if (search=='WK')
{
    filename='vl_vx_wa_wb_we_wh_wk_wl_wo_wp.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: VX, WA, WB, WE, WH, WK, WO, WP';
}
 if (search=='WL')
{
    filename='vl_vx_wa_wb_we_wh_wk_wl_wo_wp.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: VX, WA, WB, WE, WH, WK, WO, WP';
}
if (search=='WO')
{
    filename='vl_vx_wa_wb_we_wh_wk_wl_wo_wp.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: VX, WA, WB, WE, WH, WK, WO, WP';
}
if (search=='WP')
{
    filename='vl_vx_wa_wb_we_wh_wk_wl_wo_wp.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: VX, WA, WB, WE, WH, WK, WO, WP';
}
/*if (search=='XA')
{
    filename='xa.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: XA';
}
*/

if(outp=='discription'){
  
 var lang = navigator.language.split("-");
var current_lang = (lang[0]);
 if(current_lang=='de'){ 
return discription;
 }
else{
    return discription2;
    }

}else{
     return filename;
}
}