function search_t_s(search,outp){
     search=search.toUpperCase();
    var  filename='no',discription='';
if (search=='AC')
{
    filename='ac_ad_af.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AC, AD, AF';
}
if (search=='AD')
{
    filename='ac_ad_af.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AC, AD, AF';
}
if (search=='AF')
{
    filename='ac_ad_af.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AC, AD, AF';
}
if (search=='AG')
{
    filename='ag_ah_al_ap_ar.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AG, AH, AL, AP, AR, AX';
}
if (search=='AH')
{
    filename='ag_ah_al_ap_ar.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AG, AH, AL, AP, AR, AX';
}
if (search=='AL')
{
    filename='ag_ah_al_ap_ar.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AG, AH, AL, AP, AR, AX';
}
if (search=='AP')
{
    filename='ag_ah_al_ap_ar.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AG, AH, AL, AP, AR, AX';
}
if (search=='AR')
{
    filename='ag_ah_al_ap_ar.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AG, AH, AL, AP, AR, AX';
}
/*if (search=='AX')
{
    filename='ag_ah_al_ap_ar_ax.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: AG, AH, AL, AP, AR, AX';
}*/
if (search=='BA')
{
    filename='ba_be_bl_bm_bn_bo_bp_br_ca_cb_cl_cn_co_cp_cv_cx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BA, BE, BM, BN, BO, BP, BR, CA, CL, CO, CP, CV, CX';
}
if (search=='BE')
{
    filename='ba_be_bl_bm_bn_bo_bp_br_ca_cb_cl_cn_co_cp_cv_cx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BA, BE, BM, BN, BO, BP, BR, CA, CL, CO, CP, CV, CX';
}
if (search=='BL')
{
    filename='ba_be_bl_bm_bn_bo_bp_br_ca_cb_cl_cn_co_cp_cv_cx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BA, BE, BM, BN, BO, BP, BR, CA, CL, CO, CP, CV, CX';
}
if (search=='BM')
{
    filename='ba_be_bl_bm_bn_bo_bp_br_ca_cb_cl_cn_co_cp_cv_cx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BA, BE, BM, BN, BO, BP, BR, CA, CL, CO, CP, CV, CX';
}
if (search=='BN')
{
    filename='ba_be_bl_bm_bn_bo_bp_br_ca_cb_cl_cn_co_cp_cv_cx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BA, BE, BM, BN, BO, BP, BR, CA, CL, CO, CP, CV, CX';
}
if (search=='BO')
{
    filename='ba_be_bl_bm_bn_bo_bp_br_ca_cb_cl_cn_co_cp_cv_cx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BA, BE, BM, BN, BO, BP, BR, CA, CL, CO, CP, CV, CX';
}
if (search=='BP')
{
    filename='ba_be_bl_bm_bn_bo_bp_br_ca_cb_cl_cn_co_cp_cv_cx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BA, BE, BM, BN, BO, BP, BR, CA, CL, CO, CP, CV, CX';
}
if (search=='BR')
{
    filename='ba_be_bl_bm_bn_bo_bp_br_ca_cb_cl_cn_co_cp_cv_cx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BA, BE, BM, BN, BO, BP, BR, CA, CL, CO, CP, CV, CX';
}
if (search=='CA')
{
    filename='ba_be_bl_bm_bn_bo_bp_br_ca_cb_cl_cn_co_cp_cv_cx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BA, BE, BM, BN, BO, BP, BR, CA, CL, CO, CP, CV, CX';
}
if (search=='CB')
{
    filename='ba_be_bl_bm_bn_bo_bp_br_ca_cb_cl_cn_co_cp_cv_cx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BA, BE, BM, BN, BO, BP, BR, CA, CL, CO, CP, CV, CX';
}
if (search=='CL')
{
    filename='ba_be_bl_bm_bn_bo_bp_br_ca_cb_cl_cn_co_cp_cv_cx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BA, BE, BM, BN, BO, BP, BR, CA, CL, CO, CP, CV, CX';
}
if (search=='CN')
{
    filename='ba_be_bl_bm_bn_bo_bp_br_ca_cb_cl_cn_co_cp_cv_cx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BA, BE, BM, BN, BO, BP, BR, CA, CL, CO, CP, CV, CX';
}
if (search=='CO')
{
    filename='ba_be_bl_bm_bn_bo_bp_br_ca_cb_cl_cn_co_cp_cv_cx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BA, BE, BM, BN, BO, BP, BR, CA, CL, CO, CP, CV, CX';
}
if (search=='CP')
{
    filename='ba_be_bl_bm_bn_bo_bp_br_ca_cb_cl_cn_co_cp_cv_cx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BA, BE, BM, BN, BO, BP, BR, CA, CL, CO, CP, CV, CX';
}
if (search=='CV')
{
    filename='ba_be_bl_bm_bn_bo_bp_br_ca_cb_cl_cn_co_cp_cv_cx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BA, BE, BM, BN, BO, BP, BR, CA, CL, CO, CP, CV, CX';
}
if (search=='CX')
{
    filename='ba_be_bl_bm_bn_bo_bp_br_ca_cb_cl_cn_co_cp_cv_cx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: BA, BE, BM, BN, BO, BP, BR, CA, CL, CO, CP, CV, CX';
}
if (search=='DA')
{
    filename='da_db_de_dg_dh_dl_dm_dx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: DA, DB, DE, DG, DH, DL, DM, DX';
}
if (search=='DB')
{
    filename='da_db_de_dg_dh_dl_dm_dx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: DA, DB, DE, DG, DH, DL, DM, DX';
}
if (search=='DE')
{
    filename='da_db_de_dg_dh_dl_dm_dx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: DA, DB, DE, DG, DH, DL, DM, DX';
}
if (search=='DG')
{
    filename='da_db_de_dg_dh_dl_dm_dx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: DA, DB, DE, DG, DH, DL, DM, DX';
}
if (search=='DH')
{
    filename='da_db_de_dg_dh_dl_dm_dx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: DA, DB, DE, DG, DH, DL, DM, DX';
}
if (search=='DL')
{
    filename='da_db_de_dg_dh_dl_dm_dx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: DA, DB, DE, DG, DH, DL, DM, DX';
}
if (search=='DM')
{
    filename='da_db_de_dg_dh_dl_dm_dx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: DA, DB, DE, DG, DH, DL, DM, DX';
}
if (search=='DX')
{
    filename='da_db_de_dg_dh_dl_dm_dx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: DA, DB, DE, DG, DH, DL, DM, DX';
}
if (search=='EA')
{
    filename='ea_ed_ef_ek_el_em_en.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: EA, ED, EF, EK, EL, EM, EN';
}
if (search=='ED')
{
    filename='ea_ed_ef_ek_el_em_en.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: EA, ED, EF, EK, EL, EM, EN';
}
if (search=='EF')
{
    filename='ea_ed_ef_ek_el_em_en.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: EA, ED, EF, EK, EL, EM, EN';
}
if (search=='EK')
{
    filename='ea_ed_ef_ek_el_em_en.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: EA, ED, EF, EK, EL, EM, EN';
}
if (search=='EL')
{
    filename='ea_ed_ef_ek_el_em_en.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: EA, ED, EF, EK, EL, EM, EN';
}
if (search=='EM')
{
    filename='ea_ed_ef_ek_el_em_en.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: EA, ED, EF, EK, EL, EM, EN';
}
if (search=='EN')
{
    filename='ea_ed_ef_ek_el_em_en.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: EA, ED, EF, EK, EL, EM, EN';
}
if (search=='EO')
{
    filename='eo_er_es_et_eu_ex.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: EO, ER, ES, ET, EU, EX';
}
if (search=='ER')
{
    filename='eo_er_es_et_eu_ex.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: EO, ER, ES, ET, EU, EX';
}
if (search=='ES')
{
    filename='eo_er_es_et_eu_ex.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: EO, ER, ES, ET, EU, EX';
}
if (search=='ET')
{
    filename='eo_er_es_et_eu_ex.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: EO, ER, ES, ET, EU, EX';
}
if (search=='EU')
{
    filename='eo_er_es_et_eu_ex.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: EO, ER, ES, ET, EU, EX';
}
if (search=='EX')
{
    filename='eo_er_es_et_eu_ex.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: EO, ER, ES, ET, EU, EX';
}
if (search=='FA')
{
    filename='fa_fe.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: FA, FE';
}
if (search=='FE')
{
    filename='fa_fe.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: FA, FE';
}
if (search=='FK')
{
    filename='fk.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: FK';
}
if (search=='FL')
{
    filename='fl_fm_fq.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: FL, FM, FQ';
}
if (search=='FM')
{
    filename='fl_fm_fq.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: FL, FM, FQ';
}
if (search=='FQ')
{
    filename='fl_fm_fq.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: FL, FM, FQ';
}
if (search=='GA')
{
    filename='ga_gb_ge_gl_ha_hs_ia_ib_ic.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: GA, GB, GE, HA, HS, IA, IB, IC';
}
if (search=='GB')
{
    filename='ga_gb_ge_gl_ha_hs_ia_ib_ic.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: GA, GB, GE, HA, HS, IA, IB, IC';
}
if (search=='GE')
{
    filename='ga_gb_ge_gl_ha_hs_ia_ib_ic.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: GA, GB, GE, HA, HS, IA, IB, IC';
}
if (search=='GL')
{
    filename='ga_gb_ge_gl_ha_hs_ia_ib_ic.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: GA, GB, GE, HA, HS, IA, IB, IC';
}
if (search=='HA')
{
    filename='ga_gb_ge_gl_ha_hs_ia_ib_ic.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: GA, GB, GE, HA, HS, IA, IB, IC';
}
if (search=='HS')
{
    filename='ga_gb_ge_gl_ha_hs_ia_ib_ic.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: GA, GB, GE, HA, HS, IA, IB, IC';
}
if (search=='IA')
{
    filename='ga_gb_ge_gl_ha_hs_ia_ib_ic.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: GA, GB, GE, HA, HS, IA, IB, IC';
}
if (search=='IB')
{
    filename='ga_gb_ge_gl_ha_hs_ia_ib_ic.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: GA, GB, GE, HA, HS, IA, IB, IC';
}
if (search=='IC')
{
    filename='ga_gb_ge_gl_ha_hs_ia_ib_ic.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: GA, GB, GE, HA, HS, IA, IB, IC';
}
if (search=='ID')
{
    filename='id_il_io_iq_ir_is_iw.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: ID, IL, IO, IQ, IR, IS, IW';
}
if (search=='IL')
{
    filename='id_il_io_iq_ir_is_iw.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: ID, IL, IO, IQ, IR, IS, IW';
}
if (search=='IO')
{
    filename='id_il_io_iq_ir_is_iw.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: ID, IL, IO, IQ, IR, IS, IW';
}
if (search=='IQ')
{
    filename='id_il_io_iq_ir_is_iw.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: ID, IL, IO, IQ, IR, IS, IW';
}
if (search=='IR')
{
    filename='id_il_io_iq_ir_is_iw.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: ID, IL, IO, IQ, IR, IS, IW';
}
if (search=='IS')
{
    filename='id_il_io_iq_ir_is_iw.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: ID, IL, IO, IQ, IR, IS, IW';
}
if (search=='IW')
{
    filename='id_il_io_iq_ir_is_iw.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: ID, IL, IO, IQ, IR, IS, IW';
}
if (search=='MA')
{
    filename='ma_mb_mc_md_me_mg_ml.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MA, MB, MC, MD, ME, MG, ML';
}
if (search=='MB')
{
    filename='ma_mb_mc_md_me_mg_ml.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MA, MB, MC, MD, ME, MG, ML';
}
if (search=='MC')
{
    filename='ma_mb_mc_md_me_mg_ml.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MA, MB, MC, MD, ME, MG, ML';
}
if (search=='MD')
{
    filename='ma_mb_mc_md_me_mg_ml.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MA, MB, MC, MD, ME, MG, ML';
}
if (search=='ME')
{
    filename='ma_mb_mc_md_me_mg_ml.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MA, MB, MC, MD, ME, MG, ML';
}
if (search=='MG')
{
    filename='ma_mb_mc_md_me_mg_ml.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MA, MB, MC, MD, ME, MG, ML';
}
if (search=='ML')
{
    filename='ma_mb_mc_md_me_mg_ml.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MA, MB, MC, MD, ME, MG, ML';
}
if (search=='MN')
{
    filename='mn_mt_mw_my_nd_ne_ng_np_nx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MN, MT, MW, MY, ND, NE, NG, NP, NX';
}
if (search=='MT')
{
    filename='mn_mt_mw_my_nd_ne_ng_np_nx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MN, MT, MW, MY, ND, NE, NG, NP, NX';
}
if (search=='MW')
{
    filename='mn_mt_mw_my_nd_ne_ng_np_nx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MN, MT, MW, MY, ND, NE, NG, NP, NX';
}
if (search=='MY')
{
    filename='mn_mt_mw_my_nd_ne_ng_np_nx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MN, MT, MW, MY, ND, NE, NG, NP, NX';
}
if (search=='ND')
{
    filename='mn_mt_mw_my_nd_ne_ng_np_nx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MN, MT, MW, MY, ND, NE, NG, NP, NX';
}
if (search=='NE')
{
    filename='mn_mt_mw_my_nd_ne_ng_np_nx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MN, MT, MW, MY, ND, NE, NG, NP, NX';
}
if (search=='NG')
{
    filename='mn_mt_mw_my_nd_ne_ng_np_nx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MN, MT, MW, MY, ND, NE, NG, NP, NX';
}
if (search=='NP')
{
    filename='mn_mt_mw_my_nd_ne_ng_np_nx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MN, MT, MW, MY, ND, NE, NG, NP, NX';
}
if (search=='NX')
{
    filename='mn_mt_mw_my_nd_ne_ng_np_nx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: MN, MT, MW, MY, ND, NE, NG, NP, NX';
}
if (search=='PA')
{
    filename='pa_ph_pl_pm_po_pv_pw.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: PA, PH, PL, PM, PO, PV, PW';
}
if (search=='PH')
{
    filename='pa_ph_pl_pm_po_pv_pw.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: PA, PH, PL, PM, PO, PV, PW';
}
if (search=='PL')
{
    filename='pa_ph_pl_pm_po_pv_pw.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: PA, PH, PL, PM, PO, PV, PW';
}
if (search=='PM')
{
    filename='pa_ph_pl_pm_po_pv_pw.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: PA, PH, PL, PM, PO, PV, PW';
}
if (search=='PO')
{
    filename='pa_ph_pl_pm_po_pv_pw.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: PA, PH, PL, PM, PO, PV, PW';
}
if (search=='PV')
{
    filename='pa_ph_pl_pm_po_pv_pw.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: PA, PH, PL, PM, PO, PV, PW';
}
if (search=='PW')
{
    filename='pa_ph_pl_pm_po_pv_pw.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: PA, PH, PL, PM, PO, PV, PW';
}
if (search=='UA')
{
    filename='ua_ue_un_vd_ve_wa_wb_we.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: UA, UE, UN, VD, VE, WA, WB, WE';
}
if (search=='UE')
{
    filename='ua_ue_un_vd_ve_wa_wb_we.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: UA, UE, UN, VD, VE, WA, WB, WE';
}
if (search=='UN')
{
    filename='ua_ue_un_vd_ve_wa_wb_we.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: UA, UE, UN, VD, VE, WA, WB, WE';
}
if (search=='VD')
{
    filename='ua_ue_un_vd_ve_wa_wb_we.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: UA, UE, UN, VD, VE, WA, WB, WE';
}
if (search=='VE')
{
    filename='ua_ue_un_vd_ve_wa_wb_we.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: UA, UE, UN, VD, VE, WA, WB, WE';
}
if (search=='WA')
{
    filename='ua_ue_un_vd_ve_wa_wb_we.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: UA, UE, UN, VD, VE, WA, WB, WE';
}
if (search=='WB')
{
    filename='ua_ue_un_vd_ve_wa_wb_we.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: UA, UE, UN, VD, VE, WA, WB, WE';
}
if (search=='WE')
{
    filename='ua_ue_un_vd_ve_wa_wb_we.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: UA, UE, UN, VD, VE, WA, WB, WE';
}
if (search=='WH')
{
    filename='wh.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: WH';
}
if (search=='WK')
{
    filename='wk_wl_wo_wp_wx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: WK, WL, WO, WP, WX';
}
if (search=='WL')
{
    filename='wk_wl_wo_wp_wx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: WK, WL, WO, WP, WX';
}
if (search=='WO')
{
    filename='wk_wl_wo_wp_wx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: WK, WL, WO, WP, WX';
}
if (search=='WP')
{
    filename='wk_wl_wo_wp_wx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: WK, WL, WO, WP, WX';
}
if (search=='WX')
{
    filename='wk_wl_wo_wp_wx.png';
    discription='Signatur ' + search;  discription2='shelfmark: ' + search; //discription='Signaturen ' + search;  discription2='shelf marks: WK, WL, WO, WP, WX';
}

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